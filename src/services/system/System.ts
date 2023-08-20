import { Linking, Platform } from "react-native";

interface CoordsInterface {
  latitude: string;
  longitude: string;
  label: string;
}

export function openMaps({ latitude, longitude, label }: CoordsInterface) {
  const url = Platform.select({
    ios: "maps:" + latitude + "," + longitude + "?q=" + label,
    android: "geo:" + latitude + "," + longitude + "?q=" + label,
  });
  Linking.openURL(url);
}
