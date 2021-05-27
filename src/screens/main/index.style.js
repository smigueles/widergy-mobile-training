import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: '#fffade',
    alignItems: 'flex-end',
  },
  calculation: {
    flex: 1,
    backgroundColor: '#e8d5b5',
    alignItems: 'flex-end',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    backgroundColor: '#4f4364',
    flex: 3,
  },
  operations: {
    flex: 1,
    backgroundColor: '#bd94ff',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1f1633',
  },
  calcText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    width: 410,
    height: 100,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  number: {
    color: '#fffade',
    fontSize: 30,
  },
  operationButton: {
    color: '#1f1633',
    fontSize: 30,
  },
});
