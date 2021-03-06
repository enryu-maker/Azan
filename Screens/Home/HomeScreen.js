import {View, Text, FlatList,StyleSheet,Animated,Alert} from 'react-native';
import React from 'react';
import MainCard from '../../Component/mainCard';
import {COLORS,SIZES} from '../../Constants/Theme';
import {Header} from '../../Component/Header';
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavourite, Init } from '../../Store/action';
export default function HomeScreen() {   
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(Init())
  },[]) 
  const xOffset = new Animated.Value(0);
  let Parsed_list=[]
  const favMasjid = useSelector(state => state.Reducers.favourite);
  if (favMasjid.length>0 && favMasjid!=[]){
    try{
      Parsed_list=JSON.parse(favMasjid)
    }
    catch{
      Parsed_list=favMasjid
    }
  }
  else{
    Parsed_list=[]
  }
  const transitionAnimation = index => {
    return {
      transform: [
        { perspective: 800 },
        {
          scale: xOffset.interpolate({
            inputRange: [
              (index - 1) * SIZES.width,
              index * SIZES.width,
              (index + 1) * SIZES.width
            ],
            outputRange: [0.25, 1, 0.25]
          })
        },
        {
          rotateX: xOffset.interpolate({
            inputRange: [
              (index - 1) * SIZES.width,
              index * SIZES.width,
              (index + 1) * SIZES.width
            ],
            outputRange: ["45deg", "0deg", "45deg"]
          })
        },
        {
          rotateY: xOffset.interpolate({
            inputRange: [
              (index - 1) * SIZES.width,
              index * SIZES.width,
              (index + 1) * SIZES.width
            ],
            outputRange: ["-45deg", "0deg", "45deg"]
          })
        }
      ]
    };
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}>
      <Header title={'Masjid مسجد'} />
      <Animated.FlatList
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: xOffset } } }],
        { useNativeDriver: true }
      )}
      pagingEnabled={true}
      data={Parsed_list}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      horizontal
        renderItem={({item, index}) => {
          return( 
        <Animated.View key={index} style={[styles.itemWrapper, transitionAnimation(index)]}>
          <MainCard key={index} name={item.name} urdu_name={item.urdu_name} favourite={item.is_favourite} time={item.time_data} 
          onPress={()=>{
            Alert.alert(
              "Remove Favourite Masjid",
              "پسندیدہ مسجد ہٹانا",
              [
                { text: "Remove ہٹانا", onPress: () => {
                  dispatch(deleteFavourite(Parsed_list,index))
                } 
              },
              {
                text: "Cancel رد",
                onPress: () => {},
                style: "cancel"
              }
              ]
            );
          }} />
          </Animated.View>
          )
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    itemWrapper: {
        width:SIZES.width,
        heigth:SIZES.height
    }
})
