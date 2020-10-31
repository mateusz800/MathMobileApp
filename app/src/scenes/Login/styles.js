import {StyleSheet} from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    container: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'100%'
    },
    logo:{
        height:200,
        width:200
    },
    appName:{
        fontSize:30,
        fontWeight:'bold',
        color:colors.DARK_GRAY
    },
    appDesc:{
        color:colors.DARK_GRAY,
        fontWeight:'bold',
    },
   
});

export default styles;