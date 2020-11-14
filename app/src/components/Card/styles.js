import { element } from 'prop-types';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get("window").width/2 - 20,
        height:Dimensions.get("window").width/2 - 20,
        margin:4, 
        display:'flex',
        alignItems:'center',
    },
    card:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        width:'100%',
        height:'100%',
        elevation:-1
    },
    title:{
        fontWeight:'bold',
        fontSize:12,
        textAlign:'center'
    },
    image:{
        position:'relative',
        top:15
    }
});

export default styles;