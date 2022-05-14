import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import { IMAGES } from '../Constants/Images';

import { COLORS,FONTS,SIZES } from '../Constants/Theme';

const FormInput = ({
    containerStyle,
    inputContainerStyle,
    label,
    placeholder,
    inputStyle,
    value = "",
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = "",
    maxLength,
    keytype="",
    onPressIn,
    img,
    onPress
}) => {
    return (
        <View style={{ ...containerStyle }}>
            <View style={{ width:SIZES.width-30,
                    alignSelf:'center',
                    flexDirection:"row",
                    justifyContent:"space-evenly"
                     }}>
                <Text style={{ color: COLORS.gray, ...FONTS.body4 ,alignSelf:'flex-start'}}>{label}</Text>
                <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    height:  50,
                    paddingHorizontal: SIZES.padding,
                    // marginTop: 10,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,
                    width:SIZES.width-30,
                    alignSelf:'center',
                    justifyContent:"space-evenly",
                    ...inputContainerStyle
                }}
            >
                {
                    prependComponent
                }
                <TextInput
                    style={{ flex: 1, ...inputStyle,marginLeft:15,...FONTS.h3 }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.background}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChangeText={(text) => onChange(text)}
                    returnKeyType="default"
                    onPressIn={onPressIn}
                />
                <TouchableOpacity style={{
                    alignSelf:"center",
                    backgroundColor:COLORS.background,
                    height:35,
                    width:35,
                    borderRadius:SIZES.base+5,
                    justifyContent:"center",
                }}
                onPress={onPress}
                >
                <Image source={img} style={{
                    width:22,
                    height:22,
                    alignSelf:"center"
                }}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FormInput