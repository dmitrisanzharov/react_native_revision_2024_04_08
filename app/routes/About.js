import React from 'react';
import {
	View,
	Text,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Image,
	ActivityIndicator,
	FlatList,
	Button,
	Linking,
	Alert,
} from "react-native";
import { Stack, useRouter, Link } from "expo-router";

const About = () => {

	const router = useRouter();

  return (
    <View>
        <Text>About</Text>
		<Button onPress={()=> router.back()} title='go back' />
    </View>
  )
}

export default About