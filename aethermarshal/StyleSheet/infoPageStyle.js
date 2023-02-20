import { Children } from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2B2B2B'
    },
    topView: {
      width:'100%',
      height: '45%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
    },
    logo: {
      marginTop: 20,
      width: '80%',
      resizeMode: 'contain',
    },
    scrollContainer: { 
      width:'100%',
      height: '55%',
      backgroundColor: '#2B2B2B'
    },
    card: {
      flex: 1,
      marginHorizontal: 30,
      width: 300,
      borderRadius: 10,
      backgroundColor: '#2B2B2B',
      marginTop: 20,
      marginBottom: 70,
      elevation: 10,
      shadowColor: '#0000000',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    infoText: {
      color: '#FFBD59',
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Blinker-Regular',
    },
    illustrations: {
      resizeMode: 'contain',
      width: 223,
      height: 173,
      marginTop: 10,
    },
    normalDot: {
      height: 8,
      width: 8,
      borderRadius: 5,
      backgroundColor: '#FFBD59',
      marginTop: 10,
      marginBottom: 10,
      marginHorizontal: 6,
    },
    indicatorContainer: {
      backgroundColor: '#2B2B2B',
      marginTop: -50,
      marginBottom: -30,  
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    directionView: {
      backgroundColor:'#2B2B2B',
      flex: 1,
      flexDirection: 'row',
      maxHeight: 65,
      marginTop: 60,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    iconPress: {
      backgroundColor: '#2B2B2B',
      height: 40,
      width: 40,
      marginBottom: 4
    },
    icon: {
      fontSize: 40,
      color: '#FFBD59',
      textAlign: 'center',
      transform: [{rotateY: '180deg'}]
    },
    contBtn: {
      height: 40,
      width: 140,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#FFBD59',
      borderWidth: 2,
      borderRadius: 10,
      marginLeft: 120,
      marginBottom: 6
    },
    contTxt: {
      color: '#FFBD59',
      fontSize: 16,
      fontFamily: 'RobotoMono-Light',
      marginBottom: 2
    },
  });