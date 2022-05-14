import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../Constants/Theme'
import { Header } from '../../Component/Header'

export default function SettingScreen() {
  return (
    <View style={{
        flex:1,
        backgroundColor:COLORS.background
      }}>
      <Header title={"Setting ماحول"}
      />
    </View>
  )
}