import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../constants'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        elevation:0
    },
    content: {
        display:'flex',
        width: Dimensions.get('window').width - 70,
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