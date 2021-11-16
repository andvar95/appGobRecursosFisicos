import React from "react";
import { View, Text, Image,ScrollView } from "react-native";
import { styles, stylesDetail } from "../styles/styles";

export const Detail = ({ route }) => {
  const { data } = route.params;
  return (
    <ScrollView>
      <Text style={styles.title}>{data.title}</Text>
      {data.Steps.map((step, idx) => (
        <View key={idx} style={stylesDetail.steps}>
          <Text> {idx + 1 + "." + step.step}</Text>
      {step.img?<Image resizeMode='contain' style={stylesDetail.imageDetail} source={{ uri:step.img }} />:null}
  
        </View>
      ))}
    </ScrollView>
  );
};
