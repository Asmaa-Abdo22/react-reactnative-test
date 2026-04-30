import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";
import { setUsers } from "./redux/usersSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";
import LoadMoreButton from "./components/LoadMoreButton";

function MainApp() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(5);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      const formatted = data.map(u => ({
        id: u.id,
        name: u.name,
        email: u.email,
        address: `${u.address.street}, ${u.address.city}, ${u.address.zipcode}`,
      }));

      dispatch(setUsers(formatted));
      await AsyncStorage.setItem("users", JSON.stringify(formatted));
    } catch {
      const cached = await AsyncStorage.getItem("users");
      if (cached) {
        dispatch(setUsers(JSON.parse(cached)));
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={search} onChange={setSearch} />

      <FlatList
        data={filtered.slice(0, visible)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
      />

      <LoadMoreButton onPress={() => setVisible(v => v + 5)} />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 16,
  },
});