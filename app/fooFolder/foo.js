import React from 'react'
import {View, Text} from 'react-native';
import { Redirect } from 'expo-router'; 


const About = () => {
  return (
    <View>
        <Text>foo</Text>
        <Redirect href={'about'} />
    </View>
  )
}


export default About