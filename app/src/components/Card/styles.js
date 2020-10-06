import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get("window").width/2 - 20,
        height:Dimensions.get("window").width/2 - 20,
        margin:4, 
    },
    card:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        width:'100%',
        height:'100%'
    },
    title:{
        fontWeight:'bold',
        fontSize:16
    }
});

export default styles;