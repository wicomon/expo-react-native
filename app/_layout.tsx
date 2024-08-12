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
      <Stack>
        <Stack.Screen name='index' />
        <Stack.Screen name='counter' />
        <Stack.Screen name='counter3' />
      </Stack>
    </PaperProvider>
  );
}
