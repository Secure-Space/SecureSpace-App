import { StyleSheet } from "react-native";

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
        height: '55%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
      },
      logo: {
        width: '90%',
        resizeMode: 'contain',
      },
      bottomView: {
        width: '100%',
        height: '45%',
        backgroundColor: '#2B2B2B'
      },
      heading: {
        color: '#FFBD59',
        opacity: 1,
        fontFamily: 'GiantRobotArmy',
        fontSize: 75,
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 5,
      },
      icon: {
        fontSize: 100,
        color: '#FFBD59',
        textAlign: 'center',
      },
      iconPress: {
        backgroundColor: '#2B2B2B',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 120,
        height: 110,
        width: 110,
        borderRadius: 60
      },
      shadowProp: {
        shadowColor: 'black',
        elevation: 5,
      }
});