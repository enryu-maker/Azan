/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { View, Text } from 'react-native'
import React from 'react'
import {COLORS} from './Constants/Theme'
import MainCard from './Component/mainCard'
import MyTabs from './Screens/Route/Tab'
import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  return (
    <View style={{
      flex:1,
      backgroundColor:COLORS.background
    }}>
      <NavigationContainer>
      <MyTabs/>      
      </NavigationContainer>
    </View>
  )
}


