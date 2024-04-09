import React from "react";
import * as rn from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

const GenericPost = () => {
	const params = useLocalSearchParams();
	console.log("params: ", params);

    const router = useRouter();

	return (
		<rn.View>
			<rn.Text>GenericPost</rn.Text>
            <rn.Button
					title="back button"
					onPress={() => {
						router.back();
					}}
				/>
		</rn.View>
	);
};

export default GenericPost;
