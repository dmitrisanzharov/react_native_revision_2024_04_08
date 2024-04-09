import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Image,
	ActivityIndicator,
	FlatList,
	Button,
	Pressable,
	Linking,
	Alert,
} from "react-native";
import { Stack, useRouter, Redirect, Link } from "expo-router";

const Home = () => {
	const router = useRouter();

	const [input, setInput] = React.useState("");

	const supportedURL = "https://google.com";

	const myArr = [
		{ name: "a", id: 1 },
		{ name: "b", id: 2 },
		{ name: "c", id: 3 },
	].map((el) => ({ ...el, id: Math.random() }));

	function handleClick() {
		console.log("clicked");
		Alert.alert("some text");
	}

	function handleButtonPress() {
		console.log("clicked button");
	}

	React.useEffect(() => {
		console.log("input", input);
	}, [input]);

	const showAlert = () =>
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

	const postNumber = 1;
	const friend = 'about'

	return (
		<SafeAreaView>
			<Stack.Screen
				options={{
					title: "My home",
					headerStyle: { backgroundColor: "darkgray" },
					headerTintColor: "black",
					headerTitleAlign: "center",
					headerLeft: () => <Text>Left</Text>,
					headerRight: () => <Text>Right</Text>,
				}}
			/>

			<View>
				<Button
					title="about"
					onPress={() => {
						router.push("/About");
					}}
				/>
				<Button
					title="my long link"
					onPress={() => {
						router.push("/myLongLink");
					}}
				/>
				<Button
					title="my second long link"
					onPress={() => {
						router.push("/my-second-long-link");
					}}
				/>
				<Button
					title="Person1"
					onPress={() => {
						router.push("/people-names/Person1");
					}}
				/>
				<Button
					title="generic post"
					onPress={() => {
						router.push(`/posts/${postNumber}`);
					}}
				/>
				<Link href={`about`}> Visit about </Link>


			</View>

			{/* ALL OTHER COMPONENTS GO BELOW */}
			<View style={{ display: "none" }}>
				<View style={{ margin: 20 }}>
					<OpenURLButton url={supportedURL} title="go to google" />
				</View>

				<View>
					<Button title={"omg"} onPress={handleButtonPress} />
				</View>

				<ScrollView>
					<View>
						<FlatList
							data={myArr}
							contentContainerStyle={{ rowGap: 10 }}
							renderItem={(item) => {
								// console.log("item", item);
								return (
									<TouchableOpacity
										style={{ backgroundColor: "orange" }}
										keyExtractor={Math.random()}
									>
										<Text>{item.item.name}</Text>
									</TouchableOpacity>
								);
							}}
						/>
					</View>
				</ScrollView>

				<ActivityIndicator
					size="large"
					color="red"
					style={{ backgroundColor: "lightpink" }}
				/>

				<Text style={styles.title1}>Holy smokes, this is title</Text>

				<TextInput
					style={{
						borderWidth: 3,
						padding: 15,
						fontSize: 30,
						margin: 5,
					}}
					placeholder="input something"
					value={input}
					onChangeText={setInput}
				/>

				<View style={{ alignItems: "baseline" }}>
					<TouchableOpacity
						style={{ padding: 10, backgroundColor: "lightgray" }}
						onPress={handleClick}
					>
						<Image
							style={{ width: 25, height: 25 }}
							source={{
								uri: "https://cdn3.iconfinder.com/data/icons/approved-and-checked/85/approved_hand_click_press_tick_checked_accepted-256.png",
							}}
						/>
					</TouchableOpacity>
				</View>

				<View>
					<Text>One</Text>
					<Text>Two</Text>
				</View>
				<ScrollView>
					<Text style={{ fontSize: 40 }}>
						{" "}
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC, making it over 2000 years old.
						Richard McClintock, a Latin professor at Hampden-Sydney
						College in Virginia, looked up one of the more obscure
						Latin words, consectetur, from a Lorem Ipsum passage,
						and going through the cites of the word in classical
						literature, discovered the undoubtable source. Lorem
						Ipsum comes from sections 1.10.32 and 1.10.33 of "de
						Finibus Bonorum et Malorum" (The Extremes of Good and
						Evil) by Cicero, written in 45 BC. This book is a
						treatise on the theory of ethics, very popular during
						the Renaissance. The first line of Lorem Ipsum, "Lorem
						ipsum dolor sit amet..", comes from a line in section
						1.10.32. The standard chunk of Lorem Ipsum used since
						the 1500s is reproduced below for those interested.
						Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
						Malorum" by Cicero are also reproduced in their exact
						original form, accompanied by English versions from the
						1914 translation by H. Rackham.
					</Text>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	blah: (arg1, arg2) => {
		console.log(arg1);
		console.log(arg2);
		if (arg1 === arg2) {
			return { color: "green" };
		} else {
			return { color: "red" };
		}
	},
	textStyle1: {
		fontSize: 25,
		fontWeight: "bold",
		color: "red",
		alignSelf: "center",
	},
	viewStyle1: {
		backgroundColor: "grey",
		borderWidth: 5,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		margin: 10,
	},
	title1: {
		fontSize: 30,
		fontWeight: "bold",
		color: "blue",
		alignSelf: "center",
	},
});

const OpenURLButton = ({ url, title }) => {
	const handlePress = React.useCallback(async () => {
		// Checking if the link is supported for links with custom URL scheme.
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			// Opening the link with some app, if the URL scheme is "http" the web link should be opened
			// by some browser in the mobile
			await Linking.openURL(url);
		} else {
			Alert.alert(`Don't know how to open this URL: ${url}`);
		}
	}, [url]);

	return <Button title={title} onPress={handlePress} />;
};
