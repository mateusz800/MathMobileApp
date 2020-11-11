import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../constants'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        width: Dimensions.get('window').width - 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 10
    },
    leftButton: {
        paddingLeft: 10
    },
    right: {
        position:'absolute',
        right:-20,
    }

});

export default styles;