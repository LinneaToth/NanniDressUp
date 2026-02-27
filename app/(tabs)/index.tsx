import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import CharacterSelection from "../features/doll/CharacterSelection";
import ImageVieWer from "../features/doll/ImageViewer";
import Wardrobe from "../features/wardrobe/Wardrobe";
import { useSessionReducer } from "../hooks/sessionReducer";

export default function Index() {
  const {
    wardrobeModalShown,
    characterModalShown,
    toggleCharacterModal,
    toggleWardrobeModal,
    chosenImg,
    setImg,
    imgUrl,
  } = useSessionReducer();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageVieWer imgSource={imgUrl} />
      </View>

      {characterModalShown && (
        <CharacterSelection onClose={toggleCharacterModal} />
      )}
      {wardrobeModalShown && <Wardrobe onClose={toggleWardrobeModal} />}

      {!chosenImg && (
        <View style={styles.dressupButtons}>
          <Button icon="feature-search" onPress={toggleCharacterModal} />
          <Button
            icon="check-bold"
            color="#8AC926"
            onPress={() => setImg(imgUrl)}
          />
        </View>
      )}

      {chosenImg && (
        <View style={styles.dressupButtons}>
          <Button icon="restore" onPress={() => setImg(null)} />
          <Button
            icon="tshirt-crew"
            color="#8AC926"
            onPress={toggleWardrobeModal}
          />
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
