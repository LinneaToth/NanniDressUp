import { Image } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  imgSource: string;
};

export default function ImageVieWer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 550,
    borderRadius: 18,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
