import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Request from './src/components/Request/Request';
import About from './src/components/About/About';
import Home from './src/screen/Home/Home';

import { MaterialIcons } from "@expo/vector-icons";
import Search from './src/components/Search/Search';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = 'home'
        } else if (route.name === "Request") {
          iconName = 'music-note'
        } else if (route.name === "About Us") {
          iconName = 'account-box'
        }else if (route.name === "Search") {
          iconName = 'search'
        }
        return <MaterialIcons name={iconName} size={size} color={color} />
      },
      headerShown: true,
      headerMode: 'screen',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#1DB954' },
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Request" component={Request} />
      <Tab.Screen name="About Us" component={About} />
    </Tab.Navigator>
  );
}

export default BottomNavigation