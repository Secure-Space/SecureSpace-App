import React, {
  useState,
  useEffect
} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainPage from './Pages/mainPage';
import SignIn from './Pages/signIn';
import SignUp from './Pages/signUp';
import InfoPage from './Pages/infoPage';

import HomeScreen from './Pages/Screens/homeScreen';
import FeedScreen from './Pages/Screens/feedScreen';
import NotificationScreen from './Pages/Screens/notificationScreen';
import ProfileScreen from './Pages/Screens/profileScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

import { getAuth, onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {

  const [isSignedIn, setIsSignedIn] = useState(true);

  const auth = getAuth();
  
  useEffect(() => {

    onAuthStateChanged(auth,(user) => {
      if(user){
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    })

  },[])

    if(isSignedIn == true){
      return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarStyle: styles.tabBarStyle,
              tabBarIcon : ({ focused, color, size}) => {
                let iconName;
  
                if(route.name === 'Home') {
                  iconName = focused 
                  ? 'ios-home' 
                  : 'ios-home-outline';
                } else if (route.name === 'Feed') {
                  iconName = focused
                  ? 'ios-videocam'
                  : 'ios-videocam-outline';
                } else if (route.name === 'Notification') {
                  iconName = focused
                  ? 'md-mail-open'
                  : 'md-mail-outline';
                } else if (route.name === 'Profile') {
                  iconName = focused
                  ? 'ios-person'
                  : 'ios-person-outline';
                }
                return <Ionicons name={iconName} size={25} color={color} />;
              },
              tabBarActiveTintColor: '#FFBD59',
              tabBarInactiveTintColor: '#2B2B2B',
              headerShown: false,
              tabBarShowLabel: false,
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }else{
      return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='MainPage' component={MainPage} />
            <Stack.Screen name='InfoPage' component={InfoPage} />
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
}

export default App;


const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: '#606061',
    borderTopWidth: 0,
    borderRadius: 20,
    left: 10,
    right: 10,
    bottom: 10,
    height: 55
  },
});
