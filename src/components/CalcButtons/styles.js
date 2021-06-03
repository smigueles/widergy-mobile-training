import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  numbers: {
    backgroundColor: '#4f4364',
    flex: 3,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  number: {
    color: '#1f1633',
    fontSize: 30,
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#e8d5b5',
  },
  operations: {
    flex: 1,
    backgroundColor: '#bd94ff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttons: {
    flex: 5,
    flexDirection: 'row',
  },
  operationButton: {
    color: '#1f1633',
    fontSize: 30,
    padding: 14,
  },
});
