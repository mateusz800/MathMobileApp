import { StyleSheet } from 'react-native';

import { colors } from '../../../constants'

const styles = StyleSheet.create({
    container: {
        width: 20,
        margin:5
    },
    line: {
        backgroundColor: colors.DARK_GRAY,
        width: "100%",
        height: 2,
        marginTop:2,
        marginBottom:2
    }
});

export default styles;