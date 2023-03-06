import { StyleSheet } from "react-native";

export default StyleSheet.create({
      mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
      },
      logo: {
        width: '90%',
        resizeMode: 'contain',
        position: 'absolute',
        top: 10
      },
      heading: {
        color: '#FFBD59',
        fontFamily: 'GiantRobotArmy',
        fontSize: 75,
        textAlign: 'center',
        position: 'absolute',
        bottom: 190
      },
      icon: {
        fontSize: 100,
        color: '#FFBD59',
      },
      iconPress: {
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 110,
        width: 110,
        borderRadius: 60,
        position: 'absolute',
        bottom: 60
      },
});
