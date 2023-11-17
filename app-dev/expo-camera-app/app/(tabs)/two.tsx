import { Pressable, StyleSheet, Button } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import { Text, View } from "../../components/Themed";

export default function TabTwoScreen() {
	const [useNumber, setNumber] = useState(0);
	const clicked = () => {
		setNumber(useNumber + 1);
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Open camera</Text>
			<Text style={styles.title}>Amount clicked {useNumber}</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(100,225,255,0.5)"
			/>
			<View className="flex p-5 m-12 rounded-md items-center justify-center bg-slate-500">
				<Text>Implemented tailwind</Text>
			</View>
			<Pressable onPress={clicked}>
				{({ pressed }) => (
					<FontAwesome
						name="camera"
						size={25}
						color="white"
						style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
					/>
				)}
			</Pressable>
			<Button
				onPress={clicked}
				title="Open camera"
				color="#243584"
				accessibilityLabel="Learn more about this blue button"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
