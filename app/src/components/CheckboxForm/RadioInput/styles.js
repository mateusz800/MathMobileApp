import {StyleSheet} from 'react-native';
import { colors } from '../../../constants';

const styles = StyleSheet.create({
    container:{
        width:20,
        height:20,
        borderWidth:2,
        marginRight:10
    },
    active:{
        backgroundColor:colors.DARK_GRAY
    }
});

export default styles;