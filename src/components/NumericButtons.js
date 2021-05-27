import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const NUmericButtons = ({mNumbers, handlePress, styles}) => {
  return (
    <View style={styles.numbers}>
      {mNumbers.map((aNumbers, i) => {
        return (
          <View key={i} style={styles.row}>
            {aNumbers.map((n, i) => (
              <TouchableOpacity key={i} onPress={() => handlePress(n)}>
                <Text style={styles.number}>{n}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      })}
    </View>
  );
};

export default NUmericButtons;
