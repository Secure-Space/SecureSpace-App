import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {
  useRef,
  useState
} from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';

import * as Font from 'expo-font';

import styles from '../StyleSheet/infoPageStyle';
import Icon from 'react-native-vector-icons/Ionicons';

const InfoPage = ({navigation}) => {

  const [fontLoaded, setFontLoaded] = useState(false);

  const scrollX = useRef(new Animated.Value(0)).current;

  const navigateM = () => {
    navigation.navigate('MainPage');
  }
  const navigateS = () => {
    navigation.navigate('SignIn')
  }

  const [messages, setMessages] = useState([
    { id: 0, text: 'Protect Your Personal Space', image: require('aethermarshal/assets/Animations/ilust1.png') },
    { id: 1, text: 'Be Vigilant, Be Aware', image: require('aethermarshal/assets/Animations/ilust2.png') },
    { id: 2, text: "Safeguard What's Yours", image: require('aethermarshal/assets/Animations/ilust3.png') },
  ]);

  const {width: windowWidth} = useWindowDimensions();

  const loadFonts = async () => {
    await Font.loadAsync({
      'Blinker-Bold': require('aethermarshal/assets/fonts/blinker/Blinker-Bold.ttf'),
      'Blinker-SemiBold': require('aethermarshal/assets/fonts/blinker/Blinker-SemiBold.ttf'),
      'Blinker-Regular': require('aethermarshal/assets/fonts/blinker/Blinker-Regular.ttf'),
      'RobotoMono-Light': require('aethermarshal/assets/fonts/roboto/RobotoMono-Light.ttf'),
    });
    setFontLoaded(true);
  }

  React.useEffect(() => {
    loadFonts();
  }, []);

  if (fontLoaded){

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
          <Image
            style={styles.logo}
            source = {require('../assets/Images/SSLONB.png')} 
          />
      </View>
      <View style={styles.scrollContainer}>

        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ], {useNativeDriver: false})}
          scrollEventThrottle={1}>
          {messages.map((message, index) => {
            return (
              <View key={message.id}>
                <View style={styles.card}>
                    <Text style={styles.infoText}>
                      {message.text}
                    </Text>
                    <Image source={message.image} style={styles.illustrations} />
                </View>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.indicatorContainer}>
          {messages.map((message) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (message.id - 1),
                windowWidth *  message.id,
                windowWidth * (message.id + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={message.id}
                style={[styles.normalDot, {width}]}
              />
            );
          })}
        </View>

        <View style={styles.directionView}>
        <TouchableOpacity style={[styles.iconPress, styles.shadowProp]} onPress={navigateM}>
                  <Icon name='exit-outline' style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.contBtn} onPress={navigateS}>
              <Text style={styles.contTxt}>Continue{' →'}</Text>
        </TouchableOpacity>

        </View>

      </View>

    </SafeAreaView>
    );
    } else { 
      return null;
  }
};

export default InfoPage;
