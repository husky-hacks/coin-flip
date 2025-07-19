import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import { Text, View } from 'react-native';

function CustomHeader() {
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'BerlinSansFB-Regular': require('../assets/fonts/BerlinSansFB-Regular.ttf')
  });

  if (!fontsLoaded) {
    return (
      <View style={{ backgroundColor: '#DD9787', height: 60, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#ffffff', fontSize: 30, fontWeight: 'bold' }}>Coin Flip</Text>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: '#DD9787', height: 100, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 6, borderBottomColor: '#E75480', borderBottomWidth: 2 }}>
      <Text style={{ 
        color: '#ffffff', 
        fontSize: 40, 
        fontWeight: 'bold',
        fontFamily: 'BerlinSansFB-Regular'
      }}>
        Coin Flip
      </Text>
    </View>
  );
}

export default function RootLayout() {
  return <Stack screenOptions={{ 
    headerShown: true,
    header: () => <CustomHeader />,
    headerStyle: { backgroundColor: '#DD9787' },
    headerTintColor: '#333',
    headerTitleAlign: 'center',
  }} />;
}
