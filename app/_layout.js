import { Stack } from "expo-router";

const Layout = () => {
	const screenOptionsConfig = {
		headerStyle: {
			backgroundColor: "lightblue",
			headerTitleStyle: {
				fontWeight: "bold",
			},
		},
	};

	return <Stack screenOptions={screenOptionsConfig} />;
};

export default Layout;
