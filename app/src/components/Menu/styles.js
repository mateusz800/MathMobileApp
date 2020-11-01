import {StyleSheet} from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        height:'100%',
        width:'75%',
        maxWidth:250,
        backgroundColor: colors.LIGHT_GRAY,
        padding:20
    },
    logoutBtn:{
        fontSize:18
    }
});

export default styles;