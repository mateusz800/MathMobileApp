import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../../constants';


const styles = StyleSheet.create({
    container:{
        padding:15,
        height:'90%',
        display:'flex',
        justifyContent:'space-evenly'
    },
    text:{
        fontWeight:'bold',
        color:colors.DARK_GRAY,
        marginBottom:20,
        height:80,
        backgroundColor:null
    },
    answers:{
        marginBottom:20
    },
});

export default styles;