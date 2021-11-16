import { View, TextInput, FlatList,Text, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/styles";
import data from "../assets/data.json";
import { Item } from "./Item";
import { SearchBar } from "react-native-elements";
import buscar from '../assets/buscar.png'

export function ListInstructives({ navigation }) {
  const [search, setSearch] = useState("");
  const [focus,setFocus] = useState(false);
  let searchInput = React.createRef();

  return (
    <View style={styles.container}>
      <View style={styles.searcherContainer}>
        <TextInput
          style={styles.searcherBar}
          placeholder="Buscar"
          value = {search }
          onChangeText={(value) => setSearch(value)}
          onFocus={()=>setFocus(true)}
          onBlur={()=>setFocus(false)}
        ></TextInput>
         <Text onPress={()=> setSearch("") }  style={styles.searchIcon} > {	focus?<Text  >X</Text>:null }</Text> 
      </View>

      <FlatList
        style={styles.list}
        data={data.filter((value) =>
          value.title.toLowerCase().includes(search.toLowerCase())
        )}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Item dato={item} navigation={navigation} />}
      />
    </View>
  );
}
