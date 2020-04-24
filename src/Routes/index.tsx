import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Text} from 'react-native';
import {useSelector} from 'react-redux';
import MIcons from 'react-native-vector-icons/MaterialIcons';

import Shop from '../Screens/Shop';
import Cart from '../Screens/Cart';
import Details from '../Screens/Details';
import {IState} from '../Store/Shop';

const Stack = createStackNavigator();
const Route = () => {
  const count: number = useSelector<IState>((s) => s.cart?.length);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Shop"
        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#0984e3',
          },
          headerTintColor: '#fff',
          headerBackTitle: null,
          headerRight: () => (
            <TouchableOpacity
              testID="iCart"
              onPress={() => navigation.navigate('Cart')}
              style={{padding: 5}}>
              {count !== 0 && (
                <Text
                  style={{
                    backgroundColor: '#ee5253',
                    textAlign: 'center',
                    width: 15,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderRadius: 50,
                    color: '#fff',
                  }}>
                  {count}
                </Text>
              )}
              <MIcons name="shopping-cart" color={'#fff'} size={25} />
            </TouchableOpacity>
          ),
        })}>
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
