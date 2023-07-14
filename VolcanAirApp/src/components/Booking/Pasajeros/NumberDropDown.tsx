import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MyIcon from './Arrow';


const NumberList = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const numbers = [
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 4, value: '4' },
    { id: 5, value: '5' },
    { id: 6, value: '6' },
    // Agrega más objetos con números según tus necesidades
  ];

  const handleNumberPress = (number) => {
    setSelectedNumber(number);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.item, selectedNumber === item.value && styles.selectedItem]}
        onPress={() => handleNumberPress(item.value)}
      >
        <Text style={styles.itemText}>{item.value}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainerLeft} >
      <MyIcon />
      </View>
      <FlatList
        data={numbers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.iconContainer} >
      <MyIcon/>
      </View>
      

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',

    

  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    backgroundColor: 'blue',
    transform: [{ rotate: '90deg' }],
    


  },
  iconContainerLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    backgroundColor: 'green',
    transform: [{ rotate: '-90deg' }],

  },
  listContent: {
    flexGrow: 3,
    alignItems: 'center',

  },
  item: {
    padding: 5,
  },
  itemText: {
    fontSize: 18,
  },
  selectedItem: {
    backgroundColor: 'yellow',
  },



  leftArrow: {
    transform: [{ rotate: '90 deg' }],

  },

  rightArrow: {
    transform: [{ rotate: '-90 deg' }],

  },



  },


  
);

export default NumberList;
