import { View, Text, StyleSheet } from "react-native";

export default function UserCard({ user }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.address}>{user.address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e293b",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    color: "#94a3b8",
    marginTop: 4,
  },
  address: {
    color: "#cbd5f5",
    marginTop: 6,
    fontSize: 12,
  },
});