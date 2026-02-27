//MODAL with clothes and accessory for overlay on doll img

import NanniModal from "@/app/components/NanniModal";
import { Text } from "react-native";

type Props = {
  onClose: () => void;
};

export default function Wardrobe({ onClose }: Props) {
  return (
    <NanniModal onClose={onClose}>
      <Text>Wardrobe, I AM WARDROBE</Text>
    </NanniModal>
  );
}
