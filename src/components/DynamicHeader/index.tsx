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
import { getImage } from "../../../database/db";

const Header_Max_Height = 200;
const Header_Min_Height = 70;

export default function DynamicHeader({
  idEvent,
  animHeaderValue,
  onPressGoBack,
  isLiked,
  onPressLikeButton,
}) {
  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });
  const image = getImage(idEvent)
  
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
        source={image}
        style={{width: "100%"}}
      />
      <View style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 16,
            paddingBottom: 16,
            paddingTop: 16,
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={onPressGoBack}>
              <Icon
                name="arrow_left"
                width={24}
                height={24}
                color="white"
              ></Icon>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <SocialButton
              name="heart"
              color="white"
              isLiked={isLiked}
              onPress={onPressLikeButton}
            />
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
