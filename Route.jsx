import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home/Home';
import Song from './src/screen/Song/Song';
import BottomNavigation from './BottomNavigation';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    // Using Stack Navigation here as activity navigation
    <Stack.Navigator screenOptions={{ headerMode: 'screen',
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#1DB954' },}}>
      {/* all pages are listed here */}
      <Stack.Screen options={{headerShown:false}} name="Dashboard" component={BottomNavigation} />
      <Stack.Screen name="Song" component={Song} options={{title:'Song Lyrics'}}/>
      </Stack.Navigator>
  );
}

export default Routes