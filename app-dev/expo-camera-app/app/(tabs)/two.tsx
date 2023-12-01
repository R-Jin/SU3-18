import {
  Pressable,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState, useEffect, useRef } from "react";
import { Text, View } from "../../components/Themed";
import { Camera, CameraType } from "expo-camera";

export default function TabTwoScreen() {
  const [type, setType] = useState(CameraType.back);

  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = () => {
    if (Camera) {
      Camera.takePictureAsync().then(onPictureSaved);
    }
  };
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ratio="16:9"
        useCamera2Api
        type={type}
        className="h-full w-full bg-slate-20"
        ref={cameraRef}
      >
        <View>
          <TouchableOpacity onPress={toggleCameraType}>
            <Text>Flip Camera</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className="bg-red-500 w-16 h-10"
            onPress={async () => {
              if (cameraRef.current) {
                let photo = await cameraRef.current.takePictureAsync();
                console.log(photo.uri);
              }
            }}
          />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
