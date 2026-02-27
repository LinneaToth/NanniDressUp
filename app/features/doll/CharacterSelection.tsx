import NanniModal from "@/app/components/NanniModal";
import { Text } from "react-native";

type Props = {
  onClose: () => void;
};

export default function CharacterSelection({ onClose }: Props) {
  return (
    <NanniModal onClose={onClose}>
      <Text>Character Selection</Text>
    </NanniModal>
  );
}
