import Button from "@/app/components/Button";
import { Modal, StyleSheet, Text, View } from "react-native";

type Props = {
  onClose: () => void;
};

export default function CharacterSelection({ onClose }: Props) {
  return (
    <Modal animationType="slide" backdropColor={"#ffffff00"}>
      <View style={styles.modal}>
        <Text>Character Selection</Text>
        <View style={styles.xBtn}>
          <Button icon="window-close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  xBtn: {
    position: "absolute",
    top: 15,
    right: 10,
  },

  modal: {
    marginTop: 75,
    borderRadius: 50,
    height: "80%",
    backgroundColor: "#ffffffc5",
    marginHorizontal: 10,
  },
});
