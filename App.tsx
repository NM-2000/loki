import React from 'react';
import {
  View,
} from 'react-native';
import { Button } from './src/components'

const App = () => {

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}} >
      <Button text="Button" backgroundColor="purple" />
    </View>
  );
};

export default App;
