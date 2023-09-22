import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

export default Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({name: 'Widergy-Training-App'}) // controls connection & communication settings
  .use(reactotronRedux())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
