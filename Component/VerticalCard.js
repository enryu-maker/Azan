import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../Constants/Theme'

export default function VerticalCard() {
  return (
    <View style={{
        backgroundColor:COLORS.primary,
        height:112,
        width:SIZES.width-30,
        alignSelf:"center",
        justifyContent:"center",
        borderRadius:SIZES.padding,
        marginTop:15
    }}>

    </View>
  )
}