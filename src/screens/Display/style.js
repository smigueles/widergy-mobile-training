import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigateButton: {
    backgroundColor: '#4f4364',
    borderRadius: 12,
  },
  navigateTxt: {
    padding: 3,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f1633',
  },
  btnAdd: {
    margin: 5,
    backgroundColor: '#e8d5b5',
    borderRadius: 20,
    padding: 5,
  },
  btnAddTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1f1633',
  },
  result: {
    flex: 2,
    backgroundColor: '#fffade',
    alignItems: 'flex-end',
  },
  calculation: {
    backgroundColor: '#e8d5b5',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  resultText: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1f1633',
  },
  calcText: {
    flex: 2,
    justifyContent: 'flex-end',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
