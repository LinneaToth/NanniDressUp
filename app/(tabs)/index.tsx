import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import ImageVieWer from "../components/ImageViewer";

const placeholderImage = require("@/assets/images/nanni_bg.png");

export default function Index() {
  const [imgChosen, setImgChosen] = useState(false);
  const [imgUrl, setImgUrl] = useState(placeholderImage);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageVieWer imgSource={imgUrl} />
      </View>
      {!imgChosen && (
        <View style={styles.footerContainer}>
          <Button
            label="Choose another character"
            onPress={() =>
              alert(
                "Patience please! You will get to choose in due time. Geez.",
              )
            }
          />
          <Button
            label="Start customizing!"
            onPress={() => setImgChosen(true)}
          />
        </View>
      )}

      {imgChosen && (
        <View style={styles.dressupButtons}>
          <Button
            icon="restore"
            onPress={() => setImgChosen(false)}
            color="#8AC926"
          />
          <Button icon="tshirt-crew-outline" />
          <Button icon="camera" color="#1982C4" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dressupButtons: {
    borderColor: "red",
    flexDirection: "row",
    gap: 10,
    flex: 1 / 3,
  },
  container: {
    flex: 1,
    backgroundColor: "#2D203F",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 45,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
