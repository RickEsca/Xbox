import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './componentes/TelaInicial'

import TelaConsole from './componentes/TelaConsole'

import TelaJogos from './componentes/TelaJogos'

import TelaNuvem from './componentes/TelaNuvem'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component = { TelaInicial }/> 
        <Stack.Screen name="Consoles" component = { TelaConsole }/>
        <Stack.Screen name="Jogos" component = { TelaJogos }/>
        <Stack.Screen name="Nuvem" component = { TelaNuvem}/>     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


