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

  resultText: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1f1633',
  },
  calcText: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    width: 400,
    height: 100,
    paddingLeft: 10,
  },
});
