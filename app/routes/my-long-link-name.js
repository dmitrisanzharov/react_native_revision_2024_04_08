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
import { Redirect   } from "expo-router";

const MyLongLinkName = () => {
  return (
    <View>
        <Text>MyLongLinkName</Text>
		<Redirect href={'/routes/About'} />
    </View>
  )
}

export default MyLongLinkName