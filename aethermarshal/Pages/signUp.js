import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Icon from 'react-native-vector-icons/Feather';
import * as Font from 'expo-font';

import React, {
    useState
} from 'react';

import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
}from 'react-native';

import styles from '../StyleSheet/signUpStyle';

import FormError from '../Components/formError';
import FormSuccess from '../Components/formSuccess';

const SignUp = ({ navigation }) => {

  const [fontLoaded, setFontLoaded] = useState(false);

  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNum] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [displayFormErr, setDisplayFormErr] = useState(false);
  const [errMessage, setErrorMessage] = useState('');
  const [succMessage, setSuccessMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const navigateI = () => {
    navigation.navigate('SignIn');
  }

  const navigateIP = () => {
    navigation.navigate('InfoPage');
  }

  const auth = getAuth();

  function createNewUser(){
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
      setIsLoading(false);
      setSuccessMessage('Your account has been created, please proceed.');
    }).catch((err)=>{
      setIsLoading(false);
      setErrorMessage('The email address is already in use, please try again');
      setDisplayFormErr(true);
    })
  }

  const validateSignUp = () => {
    var form_inputs = [fullName,mobileNumber,email,password,confirmPassword]
    var password_match = password == confirmPassword;

    if (form_inputs.includes('') || form_inputs.includes(undefined)) {
      setErrorMessage('Please fill in all fields to sign-up');
      return setDisplayFormErr(true); 
    }
    if(!password_match) {
      setErrorMessage('Passwords do not match, try again');
      return setDisplayFormErr(true); 
    }

    if(password_match)  return createNewUser(); 
  }

  const loadFonts = async () => {
    await Font.loadAsync({
      'Blinker-Bold': require('aethermarshal/assets/fonts/blinker/Blinker-Bold.ttf'),
      'Blinker-SemiBold': require('aethermarshal/assets/fonts/blinker/Blinker-SemiBold.ttf'),
      'RobotoMono-Light': require('aethermarshal/assets/fonts/roboto/RobotoMono-Light.ttf')
    });
    setFontLoaded(true);
  }

  React.useEffect(() => {
    loadFonts();
  }, []);

  if (fontLoaded) {
    return(
      <View style={styles.mainView}>
        <View style={styles.topView}>
          <Image
            style={styles.logo}
            source = {require('../assets/Images/SSspellwhiteNB.png')} 
          />
        </View>
        <View style={styles.bottomView}>
          <View style={[styles.signupView, styles.shadowProp]}>
            <View style={{flexDirection: 'row', marginTop: 20, marginRight: 20}}>
              <TouchableOpacity style={styles.iconPress} onPress={navigateIP}>
                <Icon name='chevron-left' style={styles.icon} /> 
              </TouchableOpacity>
              <Text style={[styles.welcomeTxt, { textAlign: 'center' }]}>
                Welcome to{'\n'}
                SecureSpace
              </Text>
            </View>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.formView}>
              <TextInput
                onChangeText={(val)=>setFullName(val)}
                placeholder={'Enter your Name'} 
                value={fullName}
                placeholderTextColor= 'grey' 
                style={styles.inputTxt}
              />
              <TextInput 
                onChangeText={(val)=>setMobileNum(val)}
                placeholder={'Enter your Phone Number'}
                value={mobileNumber} 
                placeholderTextColor= 'grey' 
                style={styles.inputTxt}
              />
              <TextInput
                onChangeText={(val)=>setEmail(val)} 
                placeholder={'Enter your Email Address'}
                value={email} 
                placeholderTextColor= 'grey' 
                style={styles.inputTxt}
              />
              <TextInput 
                onChangeText={(val)=>setPassword(val)} 
                placeholder={'Create a Password'}
                value={password}
                secureTextEntry={true} 
                placeholderTextColor= 'grey' 
                style={styles.inputTxt}
              />
              <TextInput 
                onChangeText={(val)=>setConfirmPassword(val)} 
                placeholder={'Re-enter your Password'}
                value={confirmPassword} 
                secureTextEntry={true} 
                placeholderTextColor= 'grey' 
                style={styles.inputTxt}
              />
                    
              <TouchableOpacity onPress={validateSignUp} style={styles.suBtn}>
                <Text style={styles.suBtnTxt}>Sign-Up</Text>
              </TouchableOpacity>

              <View style={{flexDirection: 'row'}}>
                <Text style={{
                              color: 'grey', 
                              fontFamily: 'RobotoMono-Light', 
                              letterSpacing: 0.5,
                            }}>
                  Already have an account?
                </Text>
                <TouchableOpacity 
                  onPress={navigateI}>
                    <Text style={{
                                  color: '#FFBD59',
                                  fontFamily: 'RobotoMono-Light', 
                                  letterSpacing: 0.5,
                                }}> 
                      {'\t'}Sign-In
                    </Text>
                </TouchableOpacity>
              </View>
          </ScrollView>
      </View>
    </View>
    {
      displayFormErr == true ?
      <FormError hideErrOverlay={setDisplayFormErr} err={errMessage}/>
      :
      null
    }

    {
      isLoading == true ?
      <FormSuccess/>
      :
      succMessage == 'Your account has been created, please proceed.' ?
        <FormSuccess succMessage={succMessage} close={setSuccessMessage}/>
      :
      null
    }
  </View>
  );
  } else { 
    return null;
  }
}

export default SignUp;



