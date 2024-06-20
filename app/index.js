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
	Button,
	Linking,
	Alert,
} from "react-native";
import { Stack, useRouter, Link } from "expo-router";

const Home = () => {
	const router = useRouter();

	const [text, setText] = React.useState("");

	const supportedURL = "https://google.com";

	function handleOnPress1() {
		console.log("blah");
	}

	async function handleAsyncFunction() {
		let test1 = await Linking.canOpenURL(supportedURL);
		if (test1) {
			Linking.openURL(supportedURL);
			return;
		}
		console.log("error");
	}

	function alertClick() {
		Alert.alert(
			"Alert Title",
			"My Alert Msg",
			[
				{
					text: "Cancel",
					onPress: () => Alert.alert("Cancel Pressed"),
					style: "cancel",
				},
			],
			{
				cancelable: true,
				onDismiss: () =>
					Alert.alert(
						"This alert was dismissed by tapping outside of the alert dialog."
					),
			}
		);
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

			<View>
				<Text>NavBar</Text>

				<Button
					title="About"
					onPress={() => router.push("/routes/About")}
					color="blue"
				/>
				<Button
					title="MyLongLinkName"
					onPress={() => router.push("/routes/my-long-link-name")}
					color="green"
				/>
				<View
					style={{ borderWidth: 1, marginTop: 10, marginBottom: 10 }}
				></View>
				{["one", "two"].map((el) => {
					return (
						<React.Fragment key={el}>
							<View
								style={{ marginTop: 10, marginBottom: 10 }}
							></View>
							<Button
								title={el}
								onPress={() => router.push(`/routes/${el}`)}
							/>
						</React.Fragment>
					);
				})}
				<View
					style={{ borderWidth: 1, marginTop: 10, marginBottom: 10 }}
				></View>
				<Link href={'routes/About'}>Visit about</Link>
			</View>

			{/* OLD STUFF */}
			<View style={{ display: "none" }}>
				<Text>Start</Text>
				<TextInput
					value={text}
					onChangeText={setText}
					placeholder="test"
				/>
				<TouchableOpacity
					onPress={handleOnPress1}
					style={{ borderWidth: 1 }}
				>
					<Text>Blah</Text>
				</TouchableOpacity>
				<Image
					source={{
						uri: "https://reactnative.dev/img/tiny_logo.pngg",
					}}
					style={{ width: 25, height: 25 }}
					resizeMode="cover"
				/>
				{/* <ActivityIndicator size="large" color="violet" /> */}
				{/* <ScrollView></ScrollView> */}
				<FlatList
					style={{ borderWidth: 1, height: 50 }}
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
					contentContainerStyle={{ rowGap: 10 }}
					keyExtractor={(item) => item + String(Math.random())}
				/>
				<Button title="Press me" onPress={alertClick} color="green" />
			</View>
		</View>
	);
};

export default Home;
