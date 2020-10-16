import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    },
    rect: {
        backgroundColor:colors.LIGHT_GRAY_2,
        height: 17,
        margin:2,
    },
    done: {
        backgroundColor:colors.MAROON,
    }
    
});

export default styles;