import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../../constants';


const styles = StyleSheet.create({
    container:{
        padding:15,
        height:'90%',
        display:'flex',
        paddingTop:100
        //justifyContent:'space-evenly'
    },
    text:{
        fontWeight:'bold',
        color:colors.DARK_GRAY,
        marginBottom:20,
        height:80,
        backgroundColor:null,
    },
    answer:{
        width:'85%',
        height:30
    },
    answers:{
        marginBottom:20
    },
});

export default styles;