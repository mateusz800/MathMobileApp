import { StyleSheet } from 'react-native';

import { colors } from '../../constants'

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.LIGHT_GRAY,
        marginTop:100,
        paddingBottom:20,
        elevation:5
    },
    title:{
        margin:15,
        fontWeight:'bold',
        fontSize:20,
        color:colors.DARK_GRAY
    },
    cards:{
        display:'flex',
        flexDirection:'row',
    }
});

export default styles;