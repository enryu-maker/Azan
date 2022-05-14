import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../Constants/Theme'
import { Header } from '../../Component/Header'
export default function CompassScreen() {
  return (
    <View style={{
        flex:1,
        backgroundColor:COLORS.background
      }}>
          <Header title={"Qibla قبلہ"}
          />
    </View>
  )
}