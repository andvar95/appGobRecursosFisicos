import React from "react";
import {View, Text,Button} from "react-native";
import { styles, stylesDetail } from "../styles/styles";
export const Item = ({dato,navigation}) => {
    return(
        <View style={stylesDetail.detailContainer}>
            <Text  style={stylesDetail.title}>
                {dato.title}
            </Text>
            <View style={styles.mainButton}>
            <Button title="Ver más"  onPress={()=> navigation.push("detail",{data:dato}) } > </Button>
            </View>
        </View>

    );
}