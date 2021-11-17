
import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
 
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function CartList(params) {
  const navigation = params.navigation;
  return (

    <View style={{ backgroundColor: 'white', paddingHorizontal: 20 }}>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PopularProducts');
          }}>
          <Ionicons name="arrow-back" size={20} style={{ marginLeft: 15 }} />
        </TouchableOpacity>


        <Text style={{ marginLeft: 80, fontWeight: 'bolder' }}>Cart list</Text>
      </View>



      <View>
        <Text style={{ marginLeft: 117 }}>(3 items)</Text>
      </View>



      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          borderRadius: 10,
          padding: 2,
          marginTop: 3,
        }}>
        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'rgb(240, 241, 242)',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <Image
              style={{
                width: 130,
                marginTop: 7,

                height: 100,
                resizeMode: 'stretch',
              }}
              source={{uri: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/68ae7ea7849b43eca70aac1e00f5146d_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg'}}
            />
          </View>
        </View>





        <View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
           Adidas
          </Text>
          <Text
            style={{
              color: 'rgb(174, 175, 176)',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            Stan Smith
          </Text>

          <Text style={{ textAlign: 'center' }}>
            <Text style={{ color: 'red' }}>$</Text>
            <Text style={{ color: 'black', fontWeight: 'bolder' }}>
              100.00
            </Text>
          </Text>
        </View>

        <Ionicons name="remove-circle" size={20} />
        <Text>1</Text>
        <Ionicons name="add-circle" size={20} color="red" />
      </View>





      <View
        style={{
          flexDirection: 'row',

          alignItems: 'center',
          justifyContent: 'space-between',

          borderRadius: 10,
          padding: 5,

          marginTop: 5,
        }}>
        <View>
          <View
            style={{
              borderRadius: 10,
              width: 150,
              height: 'auto',
              backgroundColor: 'rgb(240, 241, 242)',
              marginTop: 5,
              padding: 5,
            }}>
            <View>
              <Image
                style={{
                  width: 90,
                  marginTop: 15,
                  

                  height: 100,
                  resizeMode: 'stretch',
                }}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHL8BzD8_5Q4MeqtNEIy1PxJmJU70TF7blcA&usqp=CAU'}}
              />
            </View>
          </View>
        </View>




        <View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            Nike
          </Text>
          <Text
            style={{
              color: 'rgb(174, 175, 176)',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            HighDunkblue
          </Text>

          <Text style={{ textAlign: 'center' }}>
            <Text style={{ color: 'red' }}>$</Text>
            <Text style={{ color: 'black', fontWeight: 'bolder' }}>
              220.00
            </Text>
          </Text>
        </View>

<Ionicons name="remove-circle" size={20} />
        <Text>1</Text>
        <Ionicons name="add-circle" size={20} color="red" />
      </View>




      <View>
        <View
          style={{
            flexDirection: 'row',

            alignItems: 'center',

            borderRadius: 10,
            padding: 5,
            marginTop: 5,
          }}>
          <View
            style={{
              borderRadius: 10,
              width: 150,
              height: 'auto',
              backgroundColor: 'rgb(240, 241, 242)',
              marginTop: 3,
              padding: 5,
            }}>
            <View>
              <Image
                style={{
                  width: 130,
                  marginTop: 15,

                  height: 100,
                  resizeMode: 'stretch',
                }}
                 source= {{uri: 'https://media.istockphoto.com/photos/leather-shoes-picture-id172704200?k=20&m=172704200&s=612x612&w=0&h=u_OWqEfwI6pdzWYoab3mMrtXOcz-0DLCmIbWl9Io6sY='}}
              />
            </View>
          </View>




          <View>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bolder',
              }}>
              Loafer
            </Text>

            <Text
              style={{
                color: 'rgb(174, 175, 176)',
                textAlign: 'center',
                fontWeight: 'bolder',
                marginLeft: 5,
              }}>
             Leatherloafer
            </Text>

            <Text style={{ textAlign: 'center' }}>
              <Text style={{ color: 'red' }}>$</Text>
              <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                300.00{' '}
              </Text>{' '}
            </Text>
          </View>
          <Ionicons name="remove-circle" size={20} />
          <Text>1</Text>
          <Ionicons name="add-circle" size={20} color="red" />
        </View>
      </View>





      <View>
        <View
          style={{
            width: 'auto',
            height: 'auto',
            backgroundColor: 'rgb(rgb(240, 241, 242)',
            borderRadius: 15,
            padding: 10,
            marginTop: 15,
          }}>
          <Text>
            <Text
              style={{
                color: 'rgb(174, 175, 176)',
                textAlign: 'center',
                fontWeight: 'bolder',
              }}>
              Subtotal
            </Text>
            <Text style={{ textAlign: 'center' }}>
              <Text style={{ color: 'red', marginLeft: 50 }}>$</Text>
              <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                620.00
              </Text>
            </Text>
          </Text>

          <Text>
            <Text
              style={{
                color: 'rgb(174, 175, 176)',
                textAlign: 'center',
                fontWeight: 'bolder',
              }}>
              Shipping fee
            </Text>

            <Text style={{ textAlign: 'center' }}>
              <Text style={{ color: 'orange', marginLeft: 80 }}>$</Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bolder',
                  marginLeft: 100,
                }}>
                30.00
              </Text>
            </Text>
          </Text>

          <Text>------------------------------------------</Text>

          <Text>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: 'bolder',
              }}>
              Total
            </Text>

            <Text style={{ textAlign: 'center' }}>
              <Text style={{ color: 'orange', marginLeft: 110 }}>$</Text>
              <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                650.00
              </Text>
            </Text>
          </Text>
        </View>
      </View>

<TouchableOpacity
        style={{
          padding: 10,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: 'center',
          borderRadius: 10,
          flexDirection: 'row',
          backgroundColor: 'orange',
        }}>
        <Text style={{ fontWeight: 'bolder', color: 'white' }}>
          Proceed to Checkout
        </Text>
      </TouchableOpacity>




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
          <Image
          
            style={{ width: 28, height: 28 }}
          />
        </TouchableOpacity>




        <TouchableOpacity
          onPress={() => {
            navigation.navigate('cartlist');
          }}>
          <FontAwesome
            name="shopping-bag"
            size={22}
            style={{ marginRight: 10, color: 'gold' }}
          />
        </TouchableOpacity>

        

        <TouchableOpacity>
          <FontAwesome name="comments-o" size={28} style={{}} />
        </TouchableOpacity>


      </View>
    </View>
  );
}