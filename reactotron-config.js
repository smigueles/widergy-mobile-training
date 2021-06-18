import Reactotron, {networking} from 'reactotron-react-native';
import {AsyncStorage} from 'react-native';

export default Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({name: 'React Native Example Inspect'})
  .use(
    networking({
      ignoreContentTypes: /^(image)\/.*$/i,
      ignoreUrls: /\/(logs|symbolicate)$/,
    }),
  )
  .connect();
