import { TextInput, StyleSheet } from "react-native";

export default function SearchBar({ value, onChange }) {
  return (
    <TextInput
      placeholder="Search users..."
      placeholderTextColor="#94a3b8"
      value={value}
      onChangeText={onChange}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#1e293b",
    padding: 12,
    borderRadius: 12,
    color: "#fff",
    marginBottom: 16,
    width:"75%",
    margin:"auto",
    marginBlock:7
  },
});