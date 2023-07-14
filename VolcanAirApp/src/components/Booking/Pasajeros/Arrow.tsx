import React from 'react';
import { View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MyIcon = () => {
  const icon = <FontAwesome5 name={'caret-down'} color={"#2196F3"} size={25} style={{textAlign:'center'}}/>;
  return (
    <View >
      {icon}
    </View>
  );
};

export default MyIcon;
