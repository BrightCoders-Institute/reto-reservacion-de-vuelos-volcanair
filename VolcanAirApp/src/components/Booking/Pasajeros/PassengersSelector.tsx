import {View} from 'react-native';
import {Picker} from 'react-native-wheel-pick';
import React, {useState} from 'react';
import Arrow from './Arrow';
import {StyleSheet, Text} from 'react-native';

export const PassengersSelector = () => {
  const [passenger, setPassenger] = useState(1);
  const data = Array.from({length: 6}, (_, index) => index + 1);
  const initialScrollIndex = passenger - 1;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.iconContainerLeft}>
          <Arrow />
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={passenger.toString()}
            pickerData={data}
            onValueChange={(value: string) => {
              setPassenger(parseInt(value));
            }}
            textStyle={styles.pickerText}
            initialScrollIndex={initialScrollIndex}
            textSize={35}
            isShowSelectBackground={false}
            fontWeight={'bold'}
            isShowSelectLine={false}
          />
        </View>

        <View style={styles.iconContainer}>
          <Arrow />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    marginHorizontal: 0,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    backgroundColor: 'transparent',

    height: 15,
    top: 0,
  },
  picker: {
    backgroundColor: 'transparent',

    width: 40,
    height: 200,
  },
  pickerText: {
    fontWeight: 'bold',
  },

  iconContainer: {
    position: 'absolute',

    left: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    transform: [{rotate: '90deg'}],
  },
  iconContainerLeft: {
    position: 'absolute',
    right: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    transform: [{rotate: '-90deg'}],
  },
  pickerContainer: {
    bottom: 76,
  },
});
