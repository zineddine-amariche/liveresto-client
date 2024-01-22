import { StyleSheet } from "react-native";
import { COLORS } from "../Styles/theme";

const styles = StyleSheet.create({
    messages: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation:1,
        borderRadius:4,
        shadowColor:COLORS.Vert0,
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.1,
        shadowRadius:5,
        margin:10,
        padding:10,
        position:'absolute',
        top:25,
        left:0,
        right:0,
        flexDirection: 'row',
        alignSelf:'center',


    },
    Text:{
        fontSize:16,
        fontWeight:"700",
        color:COLORS.Blanc,
        width:'80%',
        // backgroundColor:"#eee"
    }
})
export default styles
