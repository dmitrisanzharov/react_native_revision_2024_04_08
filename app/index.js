import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Stack } from "expo-router";

const Home = () => {
	return (
		<View>
			<Stack.Screen
				options={{
					title: 'Home',
					headerStyle: {
						backgroundColor: "#f4511e",
					},
					headerTitleAlign: 'center',
					headerTintColor: "#fff", // doesn’t seem to do anything
					headerTitleStyle: {
						fontWeight: "bold",
						color: 'yellow', // <--- HERE COLOR CHANGE
					},
					headerShadowVisible: false,
					headerLeft: () => <Text>Left</Text>,
					headerRight: () => <Text>Right</Text>
				}}
			/>
			<Text>Start</Text>
		</View>
	);
};

export default Home;
