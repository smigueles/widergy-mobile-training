import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row-reverse',
    backgroundColor: '#4f4364',
  },
  btnItem: {
    margin: 5,
    backgroundColor: '#e8d5b5',
    borderRadius: 20,
    padding: 5,
  },
  itemTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1f1633',
  },
  history: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
