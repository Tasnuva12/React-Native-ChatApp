import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { FontAwesome, Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";
import "firebase/firestore";
import Loading from "./../components/Loading";


const Register = () => {
    const [Name, setName] = useState("");
  
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    if (isLoading) {
      return <Loading />;
    }
  
   else {
       return (
        <View style={styles.viewStyle}>
        <Card>
           <Card.Title>PLease Register on ChitChat</Card.Title>
           <Card.Divider/>
           <Input
            leftIcon={<Ionicons name="ios-person" size={24} color="black" />}
            placeholder="Name"
            onChangeText={function (currentInput) {
              setName(currentInput);
            }}
          />
          <Input
          leftIcon={<FontAwesome name="envelope" size={24} color="black" />}
          placeholder="E-mail Address"
          onChangeText={function (currentInput) {
            setEmail(currentInput);
          }}
        />
        <Input
            placeholder="Password"
            leftIcon={<Feather name="key" size={24} color="black" />}
            secureTextEntry={true}
            onChangeText={function (currentInput) {
              setPassword(currentInput);
            }}
          />
          <Button
          icon={<AntDesign name="user" size={24} color="white" />}
          title="Register!"
          type="solid"
          onPress={() => {
            if (Name && Email && Password) {
              setIsLoading(true);
              firebase
                .auth()
                .createUserWithEmailAndPassword(Email, Password)
                .then((userCreds) => {
                  userCreds.user.updateProfile({ displayName: Name });
                  firebase
                    .firestore()
                    .collection("users")
                    .doc(userCreds.user.uid)
                    .set({
                      name: Name,
                     
                      email: Email,
                    })
                    .then(() => {
                      setIsLoading(false);
                      alert("Account created successfully!");
                      console.log(userCreds.user);
                      props.navigation.navigate("logIn");
                    })
                    .catch((error) => {
                      setIsLoading(false);
                      alert(error);
                    });
                })
                .catch((error) => {
                  setIsLoading(false);
                  alert(error);
                });
            } else {
              alert("Fields can not be empty!");
            }
          }}
        />
        <Button
            type="clear"
            icon={<AntDesign name="login" size={24} color="dodgerblue" />}
            title="  Already have an account?LogIn"
            onPress={function () {
              props.navigation.navigate("logIn");
            }}
          />

        </Card>
        </View>
       )
   }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginTop: 100,
    },
    button: {
        width: 370,
        marginTop: 10
    }
})
export default Register;