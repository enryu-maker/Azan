import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../Constants/Theme'
import { Header } from './Header'
import { IMAGES } from '../Constants/Images'

export default function VerticalCard({
  name,
  urdu_name,
  is_favourite=false,
  type="NA",
  distance=0,
  onPress
}) {
  return (
    <View style={{
        backgroundColor:COLORS.primary,
        height:112,
        width:SIZES.width-30,
        alignSelf:"center",
        borderRadius:SIZES.padding,
        marginTop:15,
        
    }}>
      <Header title={name} titleStyle={{
        ...FONTS.h3,
        alignSelf:"flex-start",
        marginLeft:12,
        color:COLORS.background
      }}
      containerStyle={{
        marginTop:-5,
      }}
      rightComponent={ <TouchableOpacity style={{
        alignSelf:"center",
        backgroundColor:COLORS.background,
        height:30,
        width:30,
        borderRadius:12,
        justifyContent:"center",
        marginRight:20
    }}
    onPress={onPress}
    >
    <Image source={IMAGES.heart} style={{
        width:22,
        height:22,
        alignSelf:"center",
        tintColor:is_favourite?COLORS.red:COLORS.inactive
    }}/>
    </TouchableOpacity>}
      />
      <Header title={urdu_name} titleStyle={{
        ...FONTS.h3,
        alignSelf:"flex-start",
        marginLeft:35,
        color:COLORS.background
      }}
      containerStyle={{
        marginTop:-25,
      }}/>
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center"
      }}>
        <View style={{
          backgroundColor:COLORS.background,
          height:30,
          paddingHorizontal:10,
          borderRadius:12,
          justifyContent:"center",
          marginLeft:20
        }}>
          <Text style={{
            alignSelf:"center",
            ...FONTS.h3,
            color:COLORS.text
          }}>
          {type}
          </Text>
        </View>
        <View style={{
          backgroundColor:COLORS.background,
          height:30,
          paddingHorizontal:10,
          borderRadius:12,
          justifyContent:"center",
          marginRight:20
        }}>
          <Text style={{
            alignSelf:"center",
            ...FONTS.h3,
            color:COLORS.text
          }}>
          {distance}KM
          </Text>
        </View>
      </View>

    </View>
  )
}