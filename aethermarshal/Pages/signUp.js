import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
import FormInput from '../Components/formInput';
import FormSubmitButton from '../Components/customButton';

import { Formik } from 'formik';
import * as Yup from 'yup';

import client from '../api/client';

// import FormError from '../Components/formError';
// import FormSuccess from '../Components/formSuccess';


const isValidObjField = (obj) => {
  return Object.values(obj).every(value => value.trim())
}

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('')
  }, 2500)
}

const isValidEmail = (value) => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value)
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object({
  fullname: Yup.string().trim().min(3, 'Invalid Name!').required('Valid Name is Required!'),
  mobileNumber: Yup.string().required("Valid Number Required").matches(phoneRegExp, 'Phone Number is not Valid').min(10, 'Number too Short').max(10, 'Number too Long'),
  email: Yup.string().email('Invalid Email!').required('Valid Email is Required!'),
  password: Yup.string().trim().min(8, 'Password is too short!').required('Valid Password is Required!'),
  confirmPassword: Yup.string().equals([Yup.ref('password'), null], 'Password does not match!').required('Valid Password is Required!'),
})

const SignUp = ({ navigation }) => {

  const [fontLoaded, setFontLoaded] = useState(false);

  const userInfo = {
    fullname: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const [error, setError] = useState('')

  const {fullname, email, password, confirmPassword} = userInfo

  // const handleOnChangeText = (value, fieldName) => {
  //   setUserInfo({ ...userInfo, [fieldName]: value })
  // };

  const isValidForm = () =>{
    if (!isValidObjField(userInfo)) 
      return updateError('Required all fields!', setError)

    if(!fullname.trim() || fullname.length < 3) 
      return updateError('Invalid Name!', setError)

    if(!isValidEmail(email)) 
      return updateError('Invalid Email!', setError)

    if(!password.trim() || password.length < 8) 
      return updateError('Password is less than 8 characters!', setError)

    if(password !== confirmPassword) 
      return updateError('Password does not match!', setError)

    return true;
  }

  const submitForm = () => {
    if(isValidForm()){
      console.log(userInfo)
    }
  }

  const signUp = async (values, formikActions) => {
      const res = await client.post('/create-user', {
        ...values 
      });
      console.log(res.data);
      formikActions.resetForm();
      formikActions.setSubmitting(false);
  }

  // const [fullname, setfullname] = useState('');
  // const [mobileNumber, setMobileNum] = useState();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState();
  // const [confirmPassword, setConfirmPassword] = useState();

  // const [displayFormErr, setDisplayFormErr] = useState(false);
  // const [errMessage, setErrorMessage] = useState('');
  // const [succMessage, setSuccessMessage] = useState('');

  // const [isLoading, setIsLoading] = useState(false);

  const navigateI = () => {
    navigation.navigate('SignIn');
  }

  const navigateIP = () => {
    navigation.navigate('InfoPage');
  }

  // const auth = getAuth();

  // function createNewUser(){
  //   setIsLoading(true);
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then(()=>{
  //     setIsLoading(false);
  //     setSuccessMessage('Your account has been created, please proceed.');
  //   }).catch((err)=>{
  //     setIsLoading(false);
  //     setErrorMessage('The email address is already in use, please try again');
  //     setDisplayFormErr(true);
  //   })
  // }

  // const validateSignUp = () => {
  //   var form_inputs = [fullname,mobileNumber,email,password,confirmPassword]
  //   var password_match = password == confirmPassword;

  //   if (form_inputs.includes('') || form_inputs.includes(undefined)) {
  //     setErrorMessage('Please fill in all fields to sign-up');
  //     return setDisplayFormErr(true); 
  //   }
  //   if(!password_match) {
  //     setErrorMessage('Passwords do not match, try again');
  //     return setDisplayFormErr(true); 
  //   }

  //   if(password_match)  return createNewUser(); 
  // }

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

            <Formik 
            initialValues={userInfo} 
            validationSchema={validationSchema} 
            onSubmit={signUp}>
              {({values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit})=>{


                const {fullname, mobileNumber, email, password, confirmPassword} = values;
                return (
                  <>
                    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.formView}>
                        <FormInput
                          value={fullname}
                          error={touched.fullname && errors.fullname}
                          onChangeText={handleChange('fullname')}
                          onBlur={handleBlur('fullname')}
                          placeholder='Enter Your Full Name'
                          placeholderTextColor= 'grey'
                        />
                        {/* {error ? (
                          <Text style={{color: 'red', fontSize: 12, textAlign: 'center'}}>
                            {error}
                          </Text> 
                        ) : null} */}
                        <FormInput
                          value={mobileNumber}
                          error={touched.mobileNumber && errors.mobileNumber}
                          onChangeText={handleChange('mobileNumber')}
                          onBlur={handleBlur('mobileNumber')}
                          placeholder='Enter your Phone Number'
                          placeholderTextColor= 'grey'
                        />
                        <FormInput
                          value={email}
                          error={touched.email && errors.email}
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          autoCapitalize='none'
                          placeholder='Enter your Email Address'
                          placeholderTextColor= 'grey' 
                        />
                        <FormInput
                          value={password}
                          error={touched.password && errors.password}
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          autoCapitalize='none'
                          secureTextEntry
                          placeholder='Create a Password'
                          placeholderTextColor= 'grey' 
                        />
                        <FormInput
                          value={confirmPassword}
                          error={touched.confirmPassword && errors.confirmPassword}
                          onChangeText={handleChange('confirmPassword')}
                          onBlur={handleBlur('confirmPassword')}
                          autoCapitalize='none'
                          secureTextEntry
                          placeholder='Re-enter your Password'
                          placeholderTextColor= 'grey' 
                        />
                              
                        {/* <TouchableOpacity onPress={validateSignUp} style={styles.suBtn}>
                          <Text style={styles.suBtnTxt}>Sign-Up</Text>
                        </TouchableOpacity> */}

                        {/* <TouchableOpacity submitting={isSubmitting} onPress={handleSubmit} style={styles.suBtn}>
                          <Text style={styles.suBtnTxt}>Sign-Up</Text>
                        </TouchableOpacity> */}

                        <FormSubmitButton
                          submitting={isSubmitting}
                          onPress={handleSubmit}
                          title='Sign-Up'
                        />

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
                  </>
                )
              }}
            </Formik>

      </View>
    </View>

    {/* {
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
    } */}

  </View>
  );

  } else { 
    return null;
  }
}

export default SignUp;
