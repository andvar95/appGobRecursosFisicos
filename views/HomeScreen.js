import { StyleSheet, Text, View, Image,Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { styles } from "../styles/styles";
import logo_gob from "../assets/logo_gob.png"
import escudo from "../assets/escudo.png"

export function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}  /*style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} */ >
         <Text style={styles.title}>Oficina de Recursos Físicos y Sistemas</Text>
          <StatusBar style="auto" />
          <View style={styles.imageContainer}>
          <Image
            source={logo_gob}
            style={styles.image}
          />

          <Text style={styles.bannerText}>
              Applicativo de apoyo para el manejo de los equipos
          </Text>
        </View>

        <View    style={styles.mainButton}>
          <Button
       
          title="Ver instructivos"
          onPress={() => navigation.navigate("Instructivos")}
          >
          </Button>
        </View>
      </View>
    );
  }

