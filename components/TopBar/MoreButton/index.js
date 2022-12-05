import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import style from "./style";

export default (props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Image
          style={style.buttonIcon}
          source={require("../../../assets/icons/more-vertical.png")}
        />
      </TouchableOpacity>
      {showMenu ? (
        <View style={style.dropDown}>
          {props.list?.map((item) => (
            <TouchableOpacity style={style.menuItem} onPress={item.func}>
              <Text style={style.menuItemText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
};
