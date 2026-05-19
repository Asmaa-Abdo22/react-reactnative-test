import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function LoadMoreButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Load More</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3b82f6",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBlock: 10,
     width:"10%",
    margin:"auto",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});