import {StyleSheet} from 'react-native';

export const StyleHoroscop = StyleSheet.create({
    container: {
      flex: 1,
      fontSize: 16,
      alignItems:'center',
      flexGrow:1,
    },
    img:{
        marginTop:15,
        height:200,
        width:250,
    },
    text:{
       fontSize:28,
       fontWeight:'500',
       color:'white',
    },
    date:{
       fontSize:16.5,
       opacity:2,
       color:'grey',
    },
    itemContainer:{
        borderWidth:1,
        margin:5,
        marginTop:15,
        borderRadius:9,
        padding:12,
        paddingHorizontal:28,
        backgroundColor:'#6F7178',
    },
    containerday:{
        marginLeft:14,
    },
    itemtext:{
        color:'white',
        letterSpacing:0.5,
    },
    descri:{
        marginVertical:20,
        marginHorizontal:15,
        justifyContent:'center',
        textAlign:'justify',
        letterSpacing:0.5,
        color:'white',
        fontSize:14.8,
    },
    carac:{
        marginHorizontal:15,
        fontWeight:'700',
        color:'white',
    },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer:{
    flexGrow:1,
  }
  });
  