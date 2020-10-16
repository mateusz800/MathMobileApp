import {StyleSheet} from 'react-native';
import { colors } from '../../../constants';

const styles = StyleSheet.create({
    container:{
        width:40
    },
    line:{
        height:4,
        backgroundColor:colors.DARK_GRAY,
        position:'relative'
    },
    straightLine:{
        width:25,
        left:4
    },
    arrowTopLine:{
        transform:[{rotateZ:'-45deg'}],
        width:15,
        top:0
    },
    arrowBottomLine:{
        transform:[{rotateZ:'45deg'}],
        width:15,
        bottom:0
    }
});

export default styles;