import React, { useState, useRef } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import MyIcon from './Arrow';


const NumberList = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const flatListRef = useRef(null);
  const ITEM_HEIGHT = 20;
  const windowWidth = Dimensions.get('window').width;
  const data = Array.from({ length: 50 }, (_, index) => index);

  const handleNumberSelect = (number) => {
    setSelectedNumber(number);
  };

  const handlePrevNumber = () => {
    const prevNumber = selectedNumber - 1>= 0 ? selectdNumber - 1 : 0;
    setSelectedNumber(prevNumber);
    scrollToSelectedNumber(prevNumber);
  }
  const handleNectNumber = () => {
    const nextNumber = selectedNumber + 1 <= 50 ? selectedNumber + 1 : 50;
    setSelectedNumber(nextNumber);
    scrollToSelectedNumber(nextNumber);
  }
  const scrollToSelectedNumber = (number) => {
    flatListRef.current.scrollToIndex({
      index: number,
      animated: true,
      viewOffset: 0.5 * Dimensions.get('window').height,
    });
  };

  const renderItem = ({ item }) => {
    const itemStyle = {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: item === selectedNumber ? 'bold' : 'normal',
      color: item === selectedNumber ? 'blue' : 'black',
    };
    return (
      <Text style={itemStyle} onPress={() => handleNumberSelect(item)}>
        {item}
      </Text>
    );
  };
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const centerItem = viewableItems[Math.floor(viewableItems.length / 2)];
      setSelectedNumber(centerItem.item);
    }
  });
  const getItemLayout = (_, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  return (
    <View style={styles.container}>
      <View style={styles.iconContainerLeft}>
        <MyIcon />
      </View>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        getItemLayout={getItemLayout}
        initialNumToRender={20}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, width: windowWidth }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
      <View style={styles.iconContainer}>
        <MyIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent:'center',

    

  },
  iconContainer: {
    position:'absolute',
    right:90,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    transform: [{ rotate: '90deg' }],
    


  },
  iconContainerLeft: {
    position:'absolute',
    left:90,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    transform: [{ rotate: '-90deg' }],

  },
  listContent: {
    flexGrow: 1,
    alignItems: 'center',

  },
  item: {
    padding: 10,
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
