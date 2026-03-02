import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  label?: string;
  type?: "undefinedForNow";
  onPress?: () => void;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  color?: string;
  theme?: string;
};

export default function Button({
  label,
  theme,
  onPress,
  icon,
  color = "#ff595e",
}: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}>
        {icon && <MaterialCommunityIcons name={icon} size={50} color="white" />}
        {label && <Text style={styles.buttonLabel}>{label}</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonIcon: {
    paddingRight: 8,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  button: {
    padding: 15,
    backgroundColor: "#ff595e",
    borderRadius: 40,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
  },
});
