import {StyleSheet} from 'react-native';

import { colors } from '../../../constants';

const styles = StyleSheet.create({
    form:{
        width:'90%',
        marginTop:50
    },
    input:{
        width:'100%',
        borderWidth:1,
        paddingHorizontal:20,
        marginBottom:10
    },
    loginBtn:{
        backgroundColor:colors.MAROON,
        width:'100%',
        height:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    loginText:{
        color:'white'
    },
    changeTypeMessage:{
        display:'flex',
        flexDirection:'row',
        marginTop:20,
    },
    registerLink:{
        marginLeft:10,
        fontWeight:'bold',
        color:colors.DARK_GRAY
    }
});

export default styles;