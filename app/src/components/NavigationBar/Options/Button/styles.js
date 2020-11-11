import {StyleSheet} from 'react-native';
import { colors } from '../../../../constants';

const styles =  StyleSheet.create({
    container:{
        width:60,
        height:30,
        //borderColor:'black',
        //borderWidth:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    dot:{
        margin:1,
        width:5,
        height:5,
        borderRadius: 50,
        backgroundColor:colors.DARK_GRAY
    }
});

export default styles;