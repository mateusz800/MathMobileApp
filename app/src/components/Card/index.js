import React,  { useState, useEffect } from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { SvgUri } from 'react-native-svg';
import PropTypes from 'prop-types';

import images from '../../constants/images';
import { colors } from '../../constants'
import styles from './styles'

//const url = '../../assets/images/lessonLogo/functions.png'



const Card = ({ imageUrl, size, title }) => {
    if (size[size.length - 1] == '%') {
        // calculate object height
        size = Dimensions.get('window').width * parseInt(size) / 100;
    }
    return (
        <View style={[styles.container, size && { width: size }]}>
            <LinearGradient
                colors={[colors.MAROON, 'rgba(255,255,255,0)']}
                end={{ x: 0.5, y: 1.5 }} 
                style={[styles.card, size && { height: size }]}>
                    <Image source={images[imageUrl]} style={{width:'50%', height:'50%'}}/>
                {/*<SvgUri uri={imageUrl} width="50%" height="50%" />*/}
            </LinearGradient>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

Card.propTypes = {
    // url to svg image
    //imageUrl: PropTypes.string.isRequired,
    /**
     * Size of the component
     * It might be number or if value is in % - string
     */
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string
}

export default Card;