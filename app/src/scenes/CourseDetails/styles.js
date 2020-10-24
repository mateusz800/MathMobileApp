import {StyleSheet} from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
    titleContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        position:'relative',
        minHeight:50,
        bottom:25,

    },
    title:{
        width:'90%',
        backgroundColor:colors.DARK_GRAY,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'white',
        borderWidth:1
    },
    titleText:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    descContainer:{
        backgroundColor:colors.LIGHT_GRAY,
        width:'100%',
        minHeight:100,
        marginTop:-50,
        elevation:-1,
        paddingVertical:50,
        paddingHorizontal:15
    },
    learnBtnContainer:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        marginTop:20
    },
    learnBtn:{
        backgroundColor:colors.MAROON,
        paddingVertical:10,
        paddingHorizontal:30,
        minWidth:150,
        display:'flex',
        alignItems:'center'
    },
    learnBtnText:{
        color:'white',
    },
    imageContainer:{
        display:'flex',
        alignItems:'center'
    }
    
});

export default styles;