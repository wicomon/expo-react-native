import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons'

export default function RootLayout() {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props}/>
      }} 
    >
      <Stack
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#9d9d9d',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }}
      >
        <Stack.Screen name='index' />
        <Stack.Screen name='counter' />
        <Stack.Screen name='counter2' />
        <Stack.Screen name='boxObjectModel' />
      </Stack>
    </PaperProvider>
  );
}
