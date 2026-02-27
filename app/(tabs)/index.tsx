import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import CharacterSelection from "../features/doll/CharacterSelection";
import ImageVieWer from "../features/doll/ImageViewer";

const placeholderImage = require("@/assets/images/nanni_bg.png");

export default function Index() {
  const [imgChosen, setImgChosen] = useState(false);
  const [imageSelectionOpen, setImageSelectionOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState(placeholderImage);

  const chooseCharacterBtnHandler = () => {
    setImageSelectionOpen(true);
  };

  const imgChosenBtnHandler = () => {
    setImgChosen(true);
  };

  const onModalClose = () => {
    setImageSelectionOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageVieWer imgSource={imgUrl} />
      </View>

      {imageSelectionOpen && <CharacterSelection onClose={onModalClose} />}

      {!imgChosen && (
        <View style={styles.dressupButtons}>
          <Button icon="feature-search" onPress={chooseCharacterBtnHandler} />
          <Button
            icon="check-bold"
            color="#8AC926"
            onPress={imgChosenBtnHandler}
          />
        </View>
      )}

      {imgChosen && (
        <View style={styles.dressupButtons}>
          <Button icon="restore" onPress={() => setImgChosen(false)} />
          <Button icon="tshirt-crew" color="#8AC926" />
          <Button icon="camera-outline" color="#1982C4" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 25,
    backgroundColor: "#2D203F",
    alignItems: "center",
    paddingTop: 25,
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  dressupButtons: {
    borderColor: "red",
    flexDirection: "row",
    gap: 10,
    flex: 1 / 3,
  },
});
