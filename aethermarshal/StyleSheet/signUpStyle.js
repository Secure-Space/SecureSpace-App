import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'

      },
      topView: {
        width:'100%',
        height: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        marginTop: 20,
        width: '80%',
        resizeMode: 'contain',
      },
      bottomView: {
        width: '100%',
        height: '75%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      signupView: {
        width: '95%',
        height: '100%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      welcomeTxt: {
        color: '#FFBD59',
        fontFamily: 'Blinker-SemiBold',
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
        borderRadius: 20,
      },
      inputTxt: {
        width: '90%',
        borderWidth: 2,
        borderColor: '#FFBD59',
        height: 50,
        fontFamily:'RobotoMono-Light',
        borderRadius: 30, 
        letterSpacing: 0.5,
        paddingLeft: 20,
        color: 'white',
        marginTop: 9,
        marginBottom: 12
      },
      suBtn: {
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
      suBtnTxt: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily:'Blinker-SemiBold',
      }
});