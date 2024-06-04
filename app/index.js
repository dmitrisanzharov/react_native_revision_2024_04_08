import React from "react";
import { Stack } from "expo-router";
import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native";

const Home = () => {
	const [text, setText] = React.useState("blah");

	function handlePress() {
		console.log("yayayaya");
	}

	return (
		<SafeAreaView style={{ backgroundColor: "lightyellow", flex: 1 }}>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: "green",
						textAlign: "center",
					},
					headerTitleAlign: "center",
					title: "holy smokes this is index",
					headerShadowVisible: false,
					headerLeft: () => <Text>Left</Text>,
					headerRight: () => <Text>Right</Text>,
				}}
			/>
			{/* ALL OTHER STUFF */}
			<TouchableOpacity onPress={handlePress}>
				<Text>Blah</Text>
			</TouchableOpacity>
			<View
				name="hrLine"
				style={{
					height: 1,
					backgroundColor: "black",
					alignSelf: "stretch",
				}}
			></View>
			<TextInput value={text} onChangeText={setText} />
			<View
				name="hrLine"
				style={{
					height: 1,
					backgroundColor: "black",
					alignSelf: "stretch",
				}}
			></View>
			<View>
				<Text>This is view component stuff</Text>
				<Text>Test</Text>
			</View>
			<View
				name="hrLine"
				style={{
					height: 1,
					backgroundColor: "black",
					alignSelf: "stretch",
				}}
			></View>
			<Text>Hello</Text>
			<ScrollView style={{ maxHeight: 60 }}>
				<Text>
					Contrary to popular belief, Lorem Ipsum is not simply random
					text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor at Hampden-Sydney College in
					Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through
					the cites of the word in classical literature, discovered
					the undoubtable source. Lorem Ipsum comes from sections
					1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
					Extremes of Good and Evil) by Cicero, written in 45 BC. This
					book is a treatise on the theory of ethics, very popular
					during the Renaissance. The first line of Lorem Ipsum,
					"Lorem ipsum dolor sit amet..", comes from a line in section
					1.10.32. The standard chunk of Lorem Ipsum used since the
					1500s is reproduced below for those interested. Sections
					1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
					Cicero are also reproduced in their exact original form,
					accompanied by English versions from the 1914 translation by
					H. Rackham.
				</Text>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
