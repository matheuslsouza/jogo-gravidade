import React from "react-native";
import { View } from "react-native";

import { styles } from "./styles";

type Props = {
  posY: number;
};

export const Ball = ({ posY }: Props) => {
  return <View style={[styles.container, { bottom: posY }]}></View>;
};
