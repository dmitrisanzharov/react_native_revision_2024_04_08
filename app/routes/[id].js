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
import { useLocalSearchParams  } from "expo-router";

const DynamicRoute = () => {

    const urlParams = useLocalSearchParams();
    console.log("urlParams: ", urlParams);


  return (
    <View>
        <Text>Dynamic route</Text>
        <Text>{urlParams.id}</Text>
    </View>
  )
}

export default DynamicRoute