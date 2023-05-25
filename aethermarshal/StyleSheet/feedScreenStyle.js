import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    logoView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 110,
        marginTop: 30,
        paddingHorizontal: 10,
    },
    heading: {
        color: '#FFBD59',
        fontSize: 40,
        padding: 4,
        fontWeight: 'bold',
        opacity: 0.65,
        marginTop: 15
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    feedView: {
        backgroundColor: '#2B2B2B',
        padding: 5,
        opacity: .75,
        height: 400,
        width: '95%',
        marginTop: 10,
        marginLeft: 8,
        borderRadius: 10,
        borderRadius: 30
    },
    feedContainer: {
        backgroundColor: 'grey',
        opacity: .75,
        height: 350,
        width: '100%',
        borderRadius: 30
    },
    notification: {
        padding: 5,
        height: 320,
        width: '100%',
        flexDirection: 'column',
        marginTop: 20,
        marginBottom: 110
    },
    notifTxt: {
        color: 'grey',
        fontSize: 20,
        padding: 5,
        fontWeight: 'bold',
    },
    notifContainer: {
        backgroundColor: '#2B2B2B',
        opacity: .75,
        height: '95%',
        width: '95%',
        marginTop: 6,
        marginLeft: 8,
        borderRadius: 30,
    },
});