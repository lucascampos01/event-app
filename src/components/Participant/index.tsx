import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameParticipant}>{name}</Text>

      <TouchableOpacity style={styles.btnRemoveParticipant} onPress={onRemove}>
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
