import React from 'react'
import {View, Text, Button} from 'react-native';
import { useRouter } from "expo-router";


const About = () => {

  const router = useRouter();
  return (
    <View>
      <Button title='go back' onPress={()=> router.back()} />
        <Text>About</Text>
    </View>
  )
}


export default About