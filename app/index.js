import React from "react";
import {
	View,
	Text,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Image,
	ActivityIndicator,
	FlatList,
	Button 
} from "react-native";
import { Stack } from "expo-router";

const Home = () => {
	const [text, setText] = React.useState("");

	function handleOnPress1() {
		console.log("blah");
	}

	return (
		<View>
			<Stack.Screen
				options={{
					title: "Home",
					headerStyle: {
						backgroundColor: "#f4511e",
					},
					headerTitleAlign: "center",
					headerTintColor: "#fff", // doesn’t seem to do anything
					headerTitleStyle: {
						fontWeight: "bold",
						color: "yellow", // <--- HERE COLOR CHANGE
					},
					headerShadowVisible: false,
					headerLeft: () => <Text>Left</Text>,
					headerRight: () => <Text>Right</Text>,
				}}
			/>
			<Text>Start</Text>
			<TextInput value={text} onChangeText={setText} placeholder="test" />
			<TouchableOpacity
				onPress={handleOnPress1}
				style={{ borderWidth: 1 }}
			>
				<Text>Blah</Text>
			</TouchableOpacity>
			<Image
				source={{ uri: "https://reactnative.dev/img/tiny_logo.pngg" }}
				style={{ width: 25, height: 25 }}
				resizeMode="cover"
			/>
			<ActivityIndicator size="large" color="violet" />
			{/* <ScrollView></ScrollView> */}
			<FlatList
			style={{borderWidth: 1, height: 50}}
				data={[
					"fullTime",
					"partTime",
					"other",
					"fullTime",
					"partTime",
					"other",
					"fullTime",
					"partTime",
					"other",
				]}
				renderItem={(info) => <Text>{info.item}</Text>}
				contentContainerStyle={{rowGap: 10}}
				keyExtractor={item => item + String(Math.random())}
			/>
			<Button title="Press me" onPress={() => console.log("blah")} color='green' />
		</View>
	);
};

export default Home;
