import { View, Text,Animated } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../Constants/Theme'

export default function MainCard({
    name,
    urdu_name,
    time=[],
    favourite=false
}) {
  return (
    <Animated.View >
      <View style={{
          backgroundColor:COLORS.primary,
          height:510,
          width:SIZES.width-30,
          alignSelf:"center",
          justifyContent:"center",
          borderRadius:SIZES.padding,
          marginTop:15
      }}>

      </View>
    </Animated.View>
  )
}