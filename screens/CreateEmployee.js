import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { TextInput, Button } from "react-native-paper";

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.root}>
      <TextInput
        label="Name"
        theme={theme}
        style={styles.inputStyle}
        value={name}
        mode="outlined"
        onChangeText={(text) => setName()}
      />
      <TextInput
        label="Phone"
        theme={theme}
        style={styles.inputStyle}
        value={phone}
        mode="outlined"
        keyboardType="number-pad"
        onChangeText={(text) => setPhone()}
      />
      <TextInput
        label="Email"
        theme={theme}
        style={styles.inputStyle}
        value={email}
        mode="outlined"
        onChangeText={(text) => setEmail()}
      />
      <TextInput
        label="Salary"
        keyboardType="number-pad"
        theme={theme}
        style={styles.inputStyle}
        value={salary}
        mode="outlined"
        onChangeText={(text) => setSalary()}
      />
      <TextInput
        label="Name"
        theme={theme}
        style={styles.inputStyle}
        value={name}
        mode="outlined"
        onChangeText={(text) => setName()}
      />
      <Button
        style={styles.inputStyle}
        icon="upload"
        mode="contained"
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      <Button
        style={styles.inputStyle}
        icon="upload"
        mode="contained"
        onPress={() => console.log('Saved')}
      >
        Save
      </Button>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button
              icon="camera"
              mode="contained"
              onPress={() => setModal(false)}
            >
              Camera
            </Button>
            <Button
              icon="image-area"
              mode="contained"
              onPress={() => setModal(false)}
            >
              Gallery
            </Button>
          </View>
          <Button onPress={() => setModal(false)}>cancel</Button>
        </View>
      </Modal>
    </View>
  );
};

const theme = {
  colors: {
    primary: "#6420ee",
  },
};
export default CreateEmployee;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  modalView: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    backgroundColor: "#fff",
  },
  modalButtonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
  },
});
