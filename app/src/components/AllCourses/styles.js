import {StyleSheet} from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    title:{
        margin:15,
        fontWeight:'bold',
        fontSize:16,
        color:colors.DARK_GRAY
    },
});

export default styles;