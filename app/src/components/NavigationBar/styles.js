import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../constants'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: colors.LIGHT_GRAY,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        elevation:5
    },
    content: {
        display:'flex',
        width: Dimensions.get('window').width - 50,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:10
    },
    leftButton: {
        paddingLeft: 10
    },  
    title: {
     
    }
});

export default styles;