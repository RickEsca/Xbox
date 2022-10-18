import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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

<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Tela Inicial" component = { TelaInicial }/> 
    <Stack.Screen name="Consoles" component = { TelaConsole }/>
    <Stack.Screen name="Jogos" component = { TelaJogos }/>
    <Stack.Screen name="Nuvem" component = { TelaNuvem}/>     
  </Stack.Navigator>
</NavigationContainer>
