import AsyncStorage from '@react-native-async-storage/async-storage';
export const Init = () => {
    return async dispatch => {
      let favourite = await AsyncStorage.getItem('favourite');
      console.log(favourite)
      if (favourite !== null) {
        dispatch({
          type: 'UPDATE_FAVOURITE',
          payload: favourite,
        })
      }
    }
  }
export const updateFavourite = (current_List, newItem) => {
  return async dispatch => {
    //   console.log(newItem)
    // if (current_List && newItem) {
        let list=[]
      current_List.push(newItem);
      await AsyncStorage.setItem('favourite', JSON.stringify(current_List));
        list=current_List
      console.log(list)
    dispatch({
      type: 'UPDATE_FAVOURITE',
      payload: list,
    });
// }
  };
};
