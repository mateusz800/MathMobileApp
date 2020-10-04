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
        paddingLeft:10,
        paddingRight:10,
    },
    content: {
        display:'flex',
        width: Dimensions.get('window').width - 50,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
     
    }
});

export default styles;