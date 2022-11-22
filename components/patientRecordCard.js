import React from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import theme from "../styles/theme";
import commonStyles from "../styles/common";
import { deletePatientRecords } from "../API";

const convertDateToString = (val) => {
  var interval = "AM";
  var hour = val.getHours();
  if (hour > 11) {
    interval = "PM";
    hour = hour - 12;
  }
  return `${
    hour == 0 ? 12 : hour
  }:${val.getMinutes()} ${interval} ${val.getDate()}-${
    val.getMonth() + 1
  }-${val.getFullYear()}`;
};
export default (props) => {
  const remove = () => {
    Alert.alert(
      "Are you sure you want to delete below data",
      `${props.data.type}: ${
        props.data.value
      } ${"\n"}Time:${convertDateToString(
        new Date(props.data.dateTime)
      )}${"\n"}Description:${props.data.description}`,
      [
        {
          text: "Yes",
          onPress: () => {
            console.log(props.data.id);
            deletePatientRecords(props.data.id)
              .then((res) => {
                console.log("success", res);
                if (res.data.error) {
                  Alert.alert(res.data.error);
                } else {
                  Alert.alert("successfully deleted patient record", "", [
                    {
                      text: "Okay",
                      onPress: () => {
                        props.refresh();
                      },
                    },
                  ]);
                }
              })
              .catch((e) => {
                console.log("err", e);
              });
          },
        },
        {
          text: "No",
          onPress: () => {},
        },
      ]
    );
  };
  return (
    <TouchableOpacity style={styles.boxContainer}>
      <View style={styles.detailsContainer}>
        <Text style={styles.dataValue}>
          {props.data.type}: {props.data.value}
        </Text>
        <Text style={commonStyles.smallText}>
          Time:{" "}
          <Text style={commonStyles.bold}>
            {convertDateToString(new Date(props.data.dateTime))}
          </Text>
        </Text>
        <Text style={commonStyles.smallText}>
          <Text style={commonStyles.bold}>Description</Text>
          {props.data.description}
        </Text>
      </View>
      <View style={styles.actionButtons}>
        <Text
          style={commonStyles.textButton}
          onPress={() => {
            props.navigation.navigate("Add or update Patient Record", {
              title: "Update Patient Record",
              data: props.data,
              patientId: props.data.patientId,
            });
          }}
        >
          Update
        </Text>
        <Text style={commonStyles.textButton} onPress={remove}>
          Delete
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    padding: 16,
    backgroundColor: theme.lightBlue,
    borderRadius: 8,
    marginTop: 16,
  },
  dataValue: {
    width: "100%",
    fontSize: theme.FontM,
    fontWeight: theme.WeightM,
  },
  actionButtons: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  gender: {
    ...commonStyles.smallText,
    width: 100,
  },
});
