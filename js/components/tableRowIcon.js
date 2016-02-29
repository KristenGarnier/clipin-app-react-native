import React, {View, Image, Text, StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rowCoord: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: width * 0.1,
    paddingVertical: height * 0.02,
  },
  imageRowCoord: {
    width: 40,
    height: 40
  }
});

export default ({img, text}) => {
  return <View style={styles.rowCoord}>
    <Image source={img} resizeMode="contain" style={styles.imageRowCoord}/>
    <Text style={{marginLeft: 10}}>{text}</Text>
  </View>
}
