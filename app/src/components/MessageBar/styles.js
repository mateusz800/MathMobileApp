import { StyleSheet } from 'react-native';
import { colors } from '../../constants';


const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.LIGHT_GRAY,
        padding:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        position:'absolute',
        width:'100%'
    },
    text:{
        fontWeight:'bold',
        color:colors.DARK_GRAY
    }
});

export default styles;