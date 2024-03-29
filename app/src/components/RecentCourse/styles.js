import { StyleSheet } from 'react-native';

import { colors } from '../../constants'

const styles = StyleSheet.create({
    center: {
        display:'flex',
        alignItems:'center'
    },
    title:{
        margin:15,
        fontWeight:'bold',
        fontSize:16,
        color:colors.DARK_GRAY
    },
});

export default styles;