import { StyleSheet } from 'react-native';

import { colors } from '../../constants'

const styles = StyleSheet.create({
    container: {
        marginBottom:100
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.DARK_GRAY,
    },
    line: {
        width: '90%',
        height: 3,
        backgroundColor: colors.DARK_GRAY
    },
    sectionTitleContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderLeftColor: 'transparent',
        height:50
    },
    headerTriangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 0,
        borderRightWidth: 35,
        marginLeft:15,
        borderBottomWidth: 65,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        transform:[{ rotate: '90deg' }]
    },
    gradientTriangle: {
        elevation:-2,
        position:'absolute',
        left:-100,
        top:168,
        width: 0,
        height: 100,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 0,
        borderRightWidth: 15,
        marginLeft:200,
        borderTopWidth: 95,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: colors.MAROON,
        transform:[{ rotate: '90deg' }, {scale:6}]

    },
    section: {
        marginLeft:15,
        marginTop: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginRight:30,
    },
    imageContainer:{
        paddingHorizontal:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:15
    },
    image: {
        marginTop: 65,
        marginBottom: 30,
        marginLeft: 10,
        width: 130,
        height: 90,
        marginRight: 50
    },
    courseName: {
        fontWeight: 'bold',
        color: 'white',
        fontSize:16
    },
    column: {
        alignItems: 'center'
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 35,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        transform: [{ rotate: '90deg' }]
    },
    continueButton:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        position:'relative',
        top:30,
        paddingBottom:30,
    }
});

export default styles;