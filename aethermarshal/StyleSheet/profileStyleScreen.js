import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    fullView: {
        flex: 1,
        backgroundColor: '#2B2B2B',
    },
    topView: {
        backgroundColor: '#000000',
        width: '100%',
        height: 180,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    icnBtn:{
        height: 30,
        width: 30,
        position: 'absolute',
        top: 40,
        left: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconEx: {
        color: '#A9793B',
        fontSize: 26,
        transform: [{rotateY: '180deg'}]
    },
    IconEd: {
        color: '#A9793B',
        position: 'absolute',
        fontSize: 26,
        right: 20,
        top: 40,
    },
    bottomView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePicView: {
        width: 140,
        height: 140,
        backgroundColor: '#606061',
        position: 'absolute',
        bottom: 540,
        borderRadius: 20
    },
    profileTxt: {
        color: 'white',
        position: 'absolute',
        fontSize: 24,
        top: 70
    },
    locationTxt: {
        color: 'white',
        position: 'absolute',
        fontSize: 24,
        top: 100,
        textAlign: 'center'
    },
    topTabContainer: {
        width: '90%',
        height: 400,
        position: 'absolute',
        top: 150,
        borderRadius: 30,
        backgroundColor: '#2B2B2B'
    }
});