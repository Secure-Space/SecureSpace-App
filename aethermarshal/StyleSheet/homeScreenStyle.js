import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    item: {
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        backgroundColor: "#ccc",
        height: 100
    },
    logoView:{
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '90%',
        resizeMode: 'contain',
        marginTop: 30
    },
    calendarView: {
        padding: 5,
        height: '25%',
        width: '100%',
    },
    calendarTxt: {
        color: 'grey',
        fontSize: 20,
        padding: 4,
        fontWeight: 'bold',
        marginBottom: 5
    },
    calendarContainer: {
        opacity: .75,
        height: '85%',
        width: '95%',
        marginTop: 5,
        marginLeft: 8,
        borderRadius: 30,
        justifyContent: 'center',
    },
    toolView: {
        padding: 5,
        height: 220,
        width: '100%',
    },
    toolTxt: {
        color: 'grey',
        fontSize: 20,
        padding: 4,
        fontWeight: 'bold'
    },
    toolBtnView:{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    feedBtnP: {
        height: 150,
        width: 150,
        backgroundColor: '#A9793B',
        justifyContent: 'center',
        borderRadius: 40,
    },
    iconP: {
        fontSize: 100,
        color: '#000000',
        textAlign: 'center',
    },
    feedBtnC: {
        height: 150,
        width: 150,
        backgroundColor: '#2B2B2B',
        justifyContent: 'center',
        borderRadius: 40,
    },
    iconC: {
        fontSize: 100,
        color: 'white',
        textAlign: 'center',
    },
    userActView: {
        padding: 5,
        height: 320,
        width: '100%',
        flexDirection: 'column',
    },
    userTxt: {
        color: 'grey',
        fontSize: 20,
        padding: 5,
        fontWeight: 'bold'
    },
    userActContainer: {
        // backgroundColor: '#b8b6b4',
        opacity: .75,
        height: '85%',
        width: '95%',
        marginTop: 6,
        marginLeft: 8,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userAnalysis: {
        padding: 5,
        height: 300,
        width: '100%',
        flexDirection: 'column',
    },
    userAnalysisContainer: {
        backgroundColor: '#2B2B2B',
        opacity: .75,
        height: '95%',
        width: '95%',
        marginTop: 6,
        marginLeft: 8,
        borderRadius: 30,
    },
    notification: {
        padding: 5,
        height: 320,
        width: '100%',
        flexDirection: 'column',
        marginBottom: 220
    },
    notifTxt: {
        color: 'grey',
        fontSize: 20,
        padding: 5,
        fontWeight: 'bold'
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