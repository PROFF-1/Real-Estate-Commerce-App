import {React, useState,useRef,useEffect} from 'react'
import {View, Title,Text,StyleSheet, TextInput,TouchableOpacity,useAnimatedValue,Animated,Pressable} from 'react-native'


const BottomSheet =({setIsModal})=>{

    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const slide = useRef(new Animated.Value(300)).current;

  const slideUp = () => {
    // Will change slide value to 0 in 1.5 seconds
    Animated.timing(slide, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };

  const slideDown = () => {
    // Will change slide value to -300 in 3 seconds
    Animated.timing(slide, {
      toValue: 300,
      duration: 800,
      useNativeDriver: true,
    }).start();
  };


  useEffect(()=>{
    slideUp()
  },[])


  const closeModal=()=>{
    slideDown();
setTimeout(()=>{
  setIsModal(false)
},800)

  }
  
   
  return(
    < Pressable onPress={closeModal} style={styles.backdrop}>
      <Pressable style={{width: '100%', height:'40%'}}>
        <Animated.View style={[styles.bottomSheet,{transform:[{translateY:slide}]}]}>
          <Text style={{fontSize:25, fontWeight:'bold'}}>Login / SignUp</Text>
          <View style={{marginTop: 20}}>
            <TextInput
            
              placeholder='Enter Username'
              style={styles.input}
            />

            <TextInput
            
              placeholder='Enter Password'
              style={styles.input}
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Pressable>
    
    </Pressable>
  )
}


export default BottomSheet;



const styles =StyleSheet.create({
  backdrop:{
    position:'absolute',
    flex:1,
    top:0,
    left:0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width:'100%',
    height:'100%',
    justifyContent:'flex-end'
  },

  bottomSheet:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    paddingHorizontal:15, 
    paddingVertical:20
  },


  input:{
    width:'100%',
    height:40,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#BCBCBC',
    paddingHorizontal:15,
    marginBottom :10
  },

  button:{
    paddingHorizontal:30,
    paddingVertical:10,
    borderRadius: 10,
    backgroundColor:'#40a2e3',
    alignItems:'center',
    marginTop:15
  },
})