import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
const Profile = () => {
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
            uri:
              "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Title>William Saierra</Title>
        <Text>React-Native Developer</Text>
      </View>

      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color="#6420ee" />
          <Text style={styles.text}>someone@email.com</Text>
        </View>
      </Card>
      {/* ==== */}
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <Entypo name="phone" size={32} color="#6420ee" />
          <Text style={styles.text}>+98 11122233</Text>
        </View>
      </Card>
      {/* ==== */}
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="#6420ee" />
          <Text style={styles.text}> 112.8k</Text>
        </View>
      </Card>
      <View style={styles.buttonContainer}>
      <Button
        style={styles.inputStyle}
        icon="account-edit"
        mode="contained"
        onPress={() => alert('edit')}
      >
        Update
      </Button>
      <Button
        style={styles.inputStyle}
        icon="account-edit"
        mode="contained"
        onPress={() => alert('delete')}
      >
Delete      </Button>
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
    margin:10
  },
  myCard: { margin: 3 },
  cardContent: { flexDirection: "row", padding: 8 },
  text: {
    fontSize: 20,
    marginTop: 3,
    marginLeft: 5,
  },buttonContainer:{
      flexDirection:'row',
      justifyContent:'space-around',padding:10
  }
});
