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
        {img: {uri: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg'}, text: 'Stan Smith', price: '$100', key: '1'},
        {img: {uri: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/c7227d99699243099c24ac5e00406c2c_9366/Forum_Mid_Shoes_White_FY4976_01_standard.jpg'}, text: 'Samba', price: '$130' ,  key: '2'},
        {img: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL8BzD8_5Q4MeqtNEIy1PxJmJU70TF7blcA&usqp=CAU'}, text: 'HighDunk blue', price: '$ 220 ', key: '3'},
          {img: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dJkgMVXvRVnJiKr3N1ai5ySJ7LqyijvTlA&usqp=CAU'}, text: 'HighDunk red', price: '$ 220 ', key: '3'},
        {img: {uri: 'https://media.istockphoto.com/photos/men-fashion-leather-brown-loafer-shoe-isolated-on-a-white-background-picture-id1191174384?k=20&m=1191174384&s=612x612&w=0&h=ghD-vGLvc1ArGfD2g1-MuOrqXzuiipIg6VxILpoC5eY='}, text: 'Clarks', price: '$340', key: '3'},
                {img: {uri: 'https://media.istockphoto.com/photos/loafers-picture-id1182493294?k=20&m=1182493294&s=612x612&w=0&h=sqsGIH12zkANlUqe32T8AJOlfeADXo8R5X_QEcUx-ws='}, text: 'Loafers', price: '$335', key: '3'},
                 {img: {uri: 'https://media.istockphoto.com/photos/leather-shoes-picture-id172704200?k=20&m=172704200&s=612x612&w=0&h=u_OWqEfwI6pdzWYoab3mMrtXOcz-0DLCmIbWl9Io6sY='}, text: 'Leather Loafer', price: '$300', key: '3'},
 {img: {uri: 'https://i1.adis.ws/i/drmartens/25565001.80.jpg?$medium$'}, text: 'Dr Matens', price: '$300', key: '3'},
 {img: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT8TAhV3a9NbY3TpcH6H_J_2OOluDHEvTIYw&usqp=CAU'}, text: 'Dr Matens', price: '$440', key: '3'},

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
        
          <FontAwesome name="check" size={24} color="black" />
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

        <View style={{}}>
         <FlatList 
            data={products}
            showsVertitalScrollIndicator={false}
            vertical

            renderItem={({ item }) => (
              <TouchableOpacity  onPress={() => {
          navigation.navigate("");
        }}>
                <View style= {{alignItems:'center', height:"auto", backgroundColor:"",marginBottom:15, borderRadius:15, }}>
                  <Image source={item.img} style={{width:400, height:370, marginTop:20,}} />
                  <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                  <Text style= {{fontSize: 20,  }} > {item.text} </Text> 
                  <Text style={{fontSize: 20,}}>{item.price}</Text>
                 
                  </View>
                </View>
              </TouchableOpacity>
            )} 
           />
        </View>
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>


        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Ionicons name="home" size={26} style={{ marginLeft: 10 }} />
        </TouchableOpacity>

       
       
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <FontAwesome name="comments-o" size={28} style={{}} />
        </TouchableOpacity>




        <TouchableOpacity
          onPress={() => {
            navigation.navigate('cart');
          }}>
          <FontAwesome
            name="shopping-bag"
            size={22}
            style={{ marginRight: 10, color: 'orange' }}
          />
        </TouchableOpacity>

        

        <TouchableOpacity>
          <FontAwesome name="remove" size={28} style={{}} />
        </TouchableOpacity>


      </View>


      </ScrollView>
    </View>
  
  
  );
}
