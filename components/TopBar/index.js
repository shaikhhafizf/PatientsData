import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import React, { useEffect } from "react";
import style from "./style";
import MoreButton from "./MoreButton";
import { deletePatient, deletePatientRecords } from "../../API";

export default (props) => {
  return (
    <View style={style.topBarContainer}>
      <View style={style.content}>
        <TouchableOpacity
          style={style.backButton}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Image
            style={style.backButtonIcon}
            source={require("../../assets/icons/arrow.png")}
          />
        </TouchableOpacity>
        <View style={style.recipientDetails}>
          <View style={style.textDetails}>
            <Text style={style.recipientName}>{props.name}</Text>
          </View>
          <MoreButton
            list={[
              {
                text: "View Record",
                func: () => {
                  props.navigation.navigate("Patient Records", {
                    title: "Patient Records",
                    data: props.data,
                  });
                },
              },
              {
                text: "Update",
                func: () => {
                  props.navigation.navigate("Add or update Patient Details", {
                    title: "Update Patient Details",
                    data: props.data,
                  });
                },
              },
              {
                text: "Delete",
                func: () => {
                  deletePatient(props.data.id)
                    .then((res) => {
                      console.log("success", res);
                      if (res.data.error) {
                        Alert.alert(res.data.error);
                      } else {
                        Alert.alert("successfully Deleted patient", "", [
                          {
                            text: "Okay",
                            onPress: () =>
                              props.navigation.navigate("Patients"),
                          },
                        ]);
                      }
                    })
                    .catch((e) => {
                      console.log("err", e);
                    });
                },
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};
