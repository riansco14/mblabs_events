import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { SocialButton } from "../SocialButton";
import { Icon } from "../Icon";

const Header_Max_Height = 200;
const Header_Min_Height = 70;

export default function DynamicHeader({ animHeaderValue }) {
  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
        },
      ]}
    >
      <Animated.Image
        resizeMode="cover"
        source={require("../../../database/banda1.png")}
        width={Dimensions.get("window").width}
        height={animateHeaderHeight}
      />
      <View style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" , paddingLeft: 10, paddingRight: 16, paddingBottom: 16, paddingTop: 16}}>
          <View style={{flex: 1}}>
            <TouchableOpacity>
              <Icon name="arrow_left" width={24} height={24} color="white"></Icon>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <SocialButton name="heart" color="white" />
            <SocialButton name="share" color="white" />
          </View>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    left: 0,
    right: 0,
  },
});
