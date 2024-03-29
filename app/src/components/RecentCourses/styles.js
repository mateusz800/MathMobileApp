import { StyleSheet } from 'react-native';

import { colors } from '../../constants'

const styles = StyleSheet.create({
    container:{
        //backgroundColor:colors.LIGHT_GRAY,
        //elevation:5
    },
    title:{
        margin:15,
        fontWeight:'bold',
        fontSize:16,
        color:colors.DARK_GRAY
    },
    cards:{
        display:'flex',
        flexDirection:'row',
    },
    header:{
        marginRight:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    showMore:{
        color:colors.DARK_GRAY,
        fontSize:14
    }
});

export default styles;