import React from 'react';
import { View , StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';


const Progress = ({ value, max }) => {
    const rectWidth = (1/(max + 1)) * 100 + "%" ;
    let rects = [];
    for(let i=0;i<max;i++){
        if(i<value){
            rects.push(<View style={[styles.rect, styles.done, {width:rectWidth}]} key={i}/>);
        }
        else{
            rects.push(<View style={[styles.rect, {width:rectWidth}]} key={i}/>);
        }
    }
    return (
        <View style={styles.container}>
            {rects}
        </View>
    );
};

Progress.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
}

export default Progress;