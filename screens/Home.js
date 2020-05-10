import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = () => {
  const data = [
    { id: 1, name: "William Sierra", position: "React-native Developer" },
    { id: 2, name: "William Sierra", position: "React-native Developer" },
    { id: 3, name: "William Sierra", position: "React-native Developer" },
    { id: 4, name: "William Sierra", position: "React-native Developer" },
    { id: 5, name: "William Sierra", position: "React-native Developer" },
    { id: 6, name: "William Sierra", position: "React-native Developer" },
    { id: 7, name: "William Sierra", position: "React-native Developer" },
    { id: 8, name: "William Sierra", position: "React-native Developer" },
    { id: 9, name: "William Sierra", position: "React-native Developer" },
    { id: 10, name: "William Sierra", position: "React-native Developer" },
    { id: 11, name: "William Sierra", position: "React-native Developer" },
    { id: 12, name: "William Sierra", position: "React-native Developer" },
  ];

  const renderList = (item) => {
    return (
      <Card style={styles.myCard}>
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
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => {
          return renderList(item);
        }}
      />
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => alert("Pressed")}
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
