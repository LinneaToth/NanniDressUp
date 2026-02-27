import { Modal, StyleSheet, View } from "react-native";
import Button from "./Button";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function NanniModal({ children, onClose }: Props) {
  return (
    <Modal animationType="slide" backdropColor={"#ffffff00"}>
      <View style={styles.xBtn}>
        <Button icon="window-close" onPress={onClose} />
      </View>
      <View style={styles.modal}>{children}</View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  xBtn: {
    position: "absolute",
    top: 85,
    right: 15,
    zIndex: 2,
  },

  modal: {
    marginTop: 75,
    borderRadius: 50,
    height: "80%",
    backgroundColor: "#ffffffc5",
    marginHorizontal: 10,
    zIndex: 1,
  },
});
