import { StyleSheet } from "react-native";
// import {useFonts} from 'expo-font';

export default StyleSheet.create({
      mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2B2B'

      },
      topView: {
        width:'100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
      },
      logo: {
        width: '85%',
        resizeMode: 'contain',
      },
      bottomView: {
        width: '100%',
        height: '50%',
        backgroundColor: '#2B2B2B'
      },
      heading: {
        color: '#FFBD59',
        fontFamily: 'GiantRobotArmy-Medium', 
        fontSize: 70,
        textAlign: 'center',
        marginTop: 20,
      }
});