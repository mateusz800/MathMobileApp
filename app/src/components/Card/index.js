import React, { useState, useEffect } from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { SvgUri } from 'react-native-svg';
import PropTypes from 'prop-types';

import images from '../../constants/images';
import { colors } from '../../constants'
import styles from './styles'




const Card = ({ imageUrl, size, title, text }) => {
    const [imageSize, setImageSize] = useState(null);
    if (size[size.length - 1] == '%') {
        // calculate object height
        size = Dimensions.get('window').width * parseInt(size) / 100;
    }
    useEffect(() => {
        calculateImageSize();
    },[]);
    const calculateImageSize = () => {
        if (imageUrl) {
            Image.getSize(imageUrl, (width, height) => {
                const ratio = height / width;
                const s = { height: '50%', width: ratio * 0.5 * size.height }
                setImageSize(s);
            }, (error) => {
                console.log(error);
                setImageSize({ width: 50, height: 50 });
            });
        }

    };
    return (
        <View style={[styles.container, size && { width: size.width }]}>
            <LinearGradient
                colors={[colors.MAROON, 'rgba(255,255,255,0)']}
                end={{ x: 0.5, y: 1.5 }}
                style={[styles.card, size && { height: size.height }]}>
                {/*<Image source={images[imageUrl]} style={{width:'50%', height:'50%'}}/>*/}

                {imageSize && <Image source={{ uri: imageUrl }} style={[styles.image && { width: imageSize.width, height: imageSize.height }]} />}
                {/*<SvgUri uri={imageUrl} width="50%" height="50%" />*/}
            </LinearGradient>
            {title && <Text style={styles.title}>{title.toUpperCase()}</Text>}
            <Text>{text}</Text>
        </View>
    )
};

Card.propTypes = {
    // url to  image
    imageUrl: PropTypes.string,
    /**
     * Size of the component
     * It might be number or if value is in % - string
     */
    //size: PropTypes.object,
    title: PropTypes.string
}

export default Card;