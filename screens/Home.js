import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = ({ navigation }) => {
  const data = [
    {
      id: "1",
      name: "William Sierra",
      email: "William@email.com",
      salary: "112.7k",
      phone: "6464565436",
      position: "React-native Developer",
      picture:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: "2",
      name: "Madison Kyth",
      email: "Madison@email.com",
      salary: "89.7k",
      phone: "6464565436",
      position: "Angular Developer",
      picture:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: "3",
      name: "Json Kathiren ",
      email: "Kathiren@email.com",
      salary: "65.7k",
      phone: "6464565436",
      position: "Angular Developer",
      picture:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
  ];

  const renderList = (item) => {
    return (
      <Card
        style={styles.myCard}
        onPress={() => navigation.navigate("Profile", { item })}
      >
        <View style={styles.cardView}>
          <Image
            style={styles.imageView}
            source={{
              uri:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.name}</Text>
            <Text>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return renderList(item);
        }}
      />
      <FAB
        onPress={() => navigation.navigate("Create")}
        style={styles.fab}
        small={false}
        icon="plus"
      />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  myCard: {
    margin: 5,
  },
  text: {},
  cardView: {
    flexDirection: "row",

    padding: 6,
  },
  text: {
    fontSize: 20,
  },
  imageView: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
