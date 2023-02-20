import { StyleSheet } from 'react-native';

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
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
      },
      logo: {
        marginTop: 15,
        width: '75%',
        resizeMode: 'contain',
      },
      bottomView: {
        width: '100%',
        height: '60%',
        backgroundColor: '#2B2B2B',
      },
      signupView: {
        backgroundColor: '#2B2B2B',
        marginLeft: 8,
        marginTop: 10,
        width: '95%',
        height: '95%',
        borderRadius: 30,
        alignItems: 'center',
      },
      shadowProp: {
        shadowColor: '#000000',
        elevation: 10,
      },
      welcomeTxt: {
        color: '#FFBD59',
        fontFamily: 'GiantRobotArmy',
        fontSize: 40,
        lineHeight: 40,
      },
      icon: {
        fontSize: 60,
        color: '#FFBD59',
        textAlign: 'center',
        marginTop: 6,
        marginRight: 5
      },
      formView: {
        width: '90%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 20
      },
      inputTxt: {
        width: '90%',
        borderWidth: 2,
        borderColor: '#FFBD59',
        height: 80,
        fontFamily:'RobotoMono-Light',
        borderRadius: 30, 
        letterSpacing: 0.5,
        paddingLeft: 20,
        color: 'white',
        marginTop: 9,
        marginBottom: 12
      },
      siBtn: {
        width:'90%',
        height: 53,
        backgroundColor: '#FFBD59',
        opacity: 0.7,
        elevation: 10,
        shadowColor: '#000000',
        borderRadius: 20,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
      },
      siBtnTxt: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily:'Blinker-SemiBold',
      }
});