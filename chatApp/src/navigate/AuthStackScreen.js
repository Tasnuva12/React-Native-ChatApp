import  React  from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LogIn from "../screens/LogIn";
import Register from "../screens/Register";

const AuthStack=createStackNavigator();


const AuthStackScreen =()=>{
    return (
        <AuthStack.Navigator initialRouteName="LogIn">
        <AuthStack.Screen
         name ="logIn"
         component={LogIn}
         options ={{headerShown :false}}
         />

         <AuthStack.Screen
         name ="register"
         component={Register}
         options ={{headerShown :false}}
         />
        </AuthStack.Navigator>
    )
}

export default AuthStackScreen;