/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {CalculatorScreen} from './presentation/screens';
import {styles} from './config/app-theme';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <CalculatorScreen />
    </View>
  );
}

export default App;
