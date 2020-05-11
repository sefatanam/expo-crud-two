import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const CreateEmployee = ({ navigation, route }) => {
  const getDetails = (type) => {
    if (route.params) {
      switch (type) {
        case "name": {
          return route.params.name;
        }
        case "position": {
          return route.params.position;
        }
        case "email": {
          return route.params.email;
        }
        case "salary": {
          return route.params.salary;
        }
        case "picture": {
          return route.params.picture;
        }
        case "phone": {
          return route.params.phone;
        }
      }
    }
  };

  const [name, setName] = useState(getDetails("name"));
  const [phone, setPhone] = useState(getDetails("phone"));
  const [email, setEmail] = useState(getDetails("email"));
  const [salary, setSalary] = useState(getDetails("salary"));
  const [picture, setPicture] = useState(getDetails("picture"));
  const [position, setPosition] = useState(getDetails("position"));
  const [modal, setModal] = useState(false);

  const submitData = () => {
    fetch("http://cc5a033e.ngrok.io/send-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        salary,
        picture,
        position,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} saved successfully`);
        navigation.navigate("Home");
      })
      .catch((err) => Alert.alert("Something went wrong"));
  };

  const updateData = () => {
    fetch("http://cc5a033e.ngrok.io/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:route.params._id,
        name,
        phone,
        email,
        salary,
        picture,
        position,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${data.name} update successfully`);
        navigation.navigate("Home");
      })
      .catch((err) => Alert.alert("Something went wrong"));
  };
  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        handleUpload(newfile);
      }
    } else {
      Alert.alert("You Need to give permission !");
    }
  };

  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        handleUpload(newfile);
      }
    } else {
      Alert.alert("You Need to give permission !");
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "crudRevu");
    data.append("cloud_name", "chotoopusku");

    fetch("https://api.cloudinary.com/v1_1/chotoopusku/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPicture(data.url);
        setModal(false);
      })
      .catch((err) => Alert.alert("Something went wrong"));
  };

  return (
    <View style={styles.root}>
      <KeyboardAvoidingView behavior="position">
        <TextInput
          label="Name"
          theme={theme}
          style={styles.inputStyle}
          value={name}
          mode="outlined"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          label="Phone"
          theme={theme}
          style={styles.inputStyle}
          value={phone}
          mode="outlined"
          keyboardType="number-pad"
          onChangeText={(text) => setPhone(text)}
        />
        <TextInput
          label="Email"
          theme={theme}
          style={styles.inputStyle}
          value={email}
          mode="outlined"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Salary"
          keyboardType="number-pad"
          theme={theme}
          style={styles.inputStyle}
          value={salary}
          mode="outlined"
          onChangeText={(text) => setSalary(text)}
        />
        <TextInput
          label="Position"
          theme={theme}
          style={styles.inputStyle}
          value={position}
          mode="outlined"
          onChangeText={(text) => setPosition(text)}
        />

        <Button
          style={styles.inputStyle}
          icon={picture == "" ? "upload" : "check"}
          mode="contained"
          onPress={() => setModal(true)}
        >
          Upload Image
        </Button>

        {route.params ? (
          <Button
            style={styles.inputStyle}
            icon="upload"
            mode="contained"
            onPress={() => updateData()}
          >
            Update
          </Button>
        ) : (
          <Button
            style={styles.inputStyle}
            icon="upload"
            mode="contained"
            onPress={() => submitData()}
          >
            Save
          </Button>
        )}

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
                onPress={() => pickFromCamera()}
              >
                Camera
              </Button>
              <Button
                icon="image-area"
                mode="contained"
                onPress={() => pickFromGallery()}
              >
                Gallery
              </Button>
            </View>
            <Button onPress={() => setModal(false)}>cancel</Button>
          </View>
        </Modal>
      </KeyboardAvoidingView>
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
