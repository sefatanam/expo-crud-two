import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";

const Home = () => {
  const data = [
    { id: 1, name: "William Sierra", position: "React-native Developer" },
    { id: 2, name: "William Sierra", position: "React-native Developer" },
    { id: 3, name: "William Sierra", position: "React-native Developer" },
    { id: 4, name: "William Sierra", position: "React-native Developer" },
  ];

  const renderList = data.map((item) => {
    return (
      <Card style={styles.myCard} key={"itemNo" + item.id}>
        <View  style={styles.cardView}>
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
  });
  return <View>{renderList}</View>;
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
});
