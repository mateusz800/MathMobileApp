import React, { useState } from 'react';
import { View } from 'react-native';
import RadioButton from './RadioInput';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const CheckboxForm = ({ checkbox_props, radio, onSelect }) => {
    const [selectedAnswer, selectAnswer] = useState(null);
    const values = checkbox_props.map(element => element.value);
    const labels = checkbox_props.map(element => element.label);
    console.log(labels);

    const select = (value) => {
        selectAnswer(value);
        onSelect(value);
    }

    return (
        <View>
            {checkbox_props.map(property => (
                <TouchableWithoutFeedback key={property.value} style={{ display: 'flex', flexDirection: 'row' }} onPress={() => select(property.value)}>
                    <RadioButton active={selectedAnswer == property.value} onPress={() => select(property.value)} />
                    {property.label}
                </TouchableWithoutFeedback>
            ))}

        </View>
    );
};

CheckboxForm.defaultProps = {
    radio: true
};

export default CheckboxForm;