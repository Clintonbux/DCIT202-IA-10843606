import React from "react";
import { View,TouchableOpacity,Image, Text, ScrollView, FlatList } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";


export default function Home(params) {
    const navigation = params.navigation;

    const categories =[
        {text: 'sportswear', key: '1'},
        {text: 'classic', key: '2'},
        {text: 'boots', key: '3'},
    ];

    const products =[
        {img: {uri: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg'}, text: 'Equity', price: '$100', key: '1'},
        {img: {uri: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/c7227d99699243099c24ac5e00406c2c_9366/Forum_Mid_Shoes_White_FY4976_01_standard.jpg'}, text: 'Samba', key: '2'},
        {img: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhdD6P6fEPA9ozwnF1FLRiFGEsiNeAWacXg&usqp=CAU'}, text: 'High Dk', price: '$ 220 ', key: '3'},
        {img: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTApkfo65ZujKDHcj6ItbgkS0b98dHhXxvA&usqp=CAU'}, text: 'Yezzy', key: '3'},
    ];
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login" );
            }}
            
          >
            <FontAwesome name="arrow-left" size={24} color="black" />
          </TouchableOpacity>

        </View>
        
          <FontAwesome name="motorcycle" size={24} color="black" />
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <AntDesign name="search1" size={20} color="black" />
            <Ionicons name="notifications-outline" size={20} color="black" />
          </View>
      </View>
      <View style={{}}>
          <Text style={{fontSize: 30, fontWeight:'600', marginTop: 30, marginLeft: 10, alignSelf:'center',}}> Sneaker Zone</Text>

      </View>
        <View> 
          <FlatList 
            data={categories}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style= {{marginTop:20, flexDirection:'row', justifyContent:'space-around'}}>
                  <Text style= {{fontSize:40, }} > {item.text} </Text>
                </View>
              </TouchableOpacity>
            )} 
           />
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View>
         <FlatList 
            data={products}
            showsVertitalScrollIndicator={false}
            vertical
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style= {{alignItems:'center',}}>
                  <Image source={item.img} style={{width:400, height:400, marginTop:20,}} />
                  <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                  <Text style= {{fontSize: 20, }} > {item.text} </Text>
                  <Text style={{fontSize: 20,}}>{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )} 
           />
        </View>

      </ScrollView>
    </View>
  
  );
}