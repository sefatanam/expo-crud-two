import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Image, Linking, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

const Profile = (props) => {
  const {
    id,
    name,
    salary,
    phone,
    picture,
    position,
    email,
  } = props.route.params.item;
  const openDial = () => {
    if (Platform.OS == "android") {
      Linking.openURL("tel:12345");
    } else {
      Linking.openURL("telprompt:123456");
    }
  };
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#523cc9", "#3c87c9"]}
        style={{ height: "20%" }}
      />
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageView}
          source={{
            uri: picture,
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Title>{name}</Title>
        <Text>{position}</Text>
      </View>

      <Card
        style={styles.myCard}
        onPress={() => Linking.openURL("mailto:sefatanam@gmail.com")}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color="#6420ee" />
          <Text style={styles.text}>{email}</Text>
        </View>
      </Card>
      {/* ==== */}
      <Card style={styles.myCard} onPress={() => openDial()}>
        <View style={styles.cardContent}>
          <Entypo name="phone" size={32} color="#6420ee" />
          <Text style={styles.text}>{phone}</Text>
        </View>
      </Card>
      {/* ==== */}
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="#6420ee" />
          <Text style={styles.text}> {salary}</Text>
        </View>
      </Card>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.inputStyle}
          icon="account-edit"
          mode="contained"
          onPress={() => alert("edit")}
        >
          Update
        </Button>
        <Button
          style={styles.inputStyle}
          icon="account-edit"
          mode="contained"
          onPress={() => alert("delete")}
        >
          Delete{" "}
        </Button>
      </View>
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageView: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    marginTop: -50,
  },
  imageContainer: {
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    margin: 10,
  },
  myCard: { margin: 3 },
  cardContent: { flexDirection: "row", padding: 8 },
  text: {
    fontSize: 20,
    marginTop: 3,
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
