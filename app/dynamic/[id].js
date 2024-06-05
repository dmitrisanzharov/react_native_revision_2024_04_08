import React from 'react'
import {View, Text} from 'react-native';
import { useLocalSearchParams  } from "expo-router";


const About = () => {

    const params = useLocalSearchParams();
    console.log("params: ", params);

  return (
    <View>
        <Text>About</Text>
    </View>
  )
}


export default About