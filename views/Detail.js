import React from "react";
import { View, Text, Image } from "react-native";
import { styles, stylesDetail } from "../styles/styles";

export const Detail = ({ route }) => {
  const { data } = route.params;
  return (
    <View>
      <Text style={styles.title}>{data.title}</Text>
      {data.Steps.map((step, idx) => (
        <View key={idx} style={stylesDetail.steps}>
          <Text> {idx + 1 + "." + step.step}</Text>

          <Text>
            {step.img && (
              <Image style={stylesDetail.imageDetail} source={step.img} />
            )}
          </Text>
        </View>
      ))}
    </View>
  );
};
