import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import styles from './styles';

const BackButton = ({ goBack }) => {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={goBack}>
            <View>
                <View style={[styles.line, styles.arrowTopLine]} />
                <View style={[styles.line, styles.straightLine]} />
                <View style={[styles.line, styles.arrowBottomLine]} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default BackButton;