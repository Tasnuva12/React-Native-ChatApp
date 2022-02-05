import React from "react";
import { NavigationContainer, NavigationRouteContext } from "@react-navigation/native";
import AuthStackScreen from "./AuthStackScreen";
import { AuthContext, AuthProvider } from "../providers/AuthProvider";
import HomeScreen from "../screens/HomeScreen";


const navigation =()=>{
    return(
     <AuthProvider>
       <AuthContext.Consumer>
       {(auth)=>(
           <NavigationContainer>
           {auth.IsLoggedIn ? <HomeScreen/> : <AuthStackScreen />}
           </NavigationContainer>
       )}
       </AuthContext.Consumer>
     </AuthProvider>
    )
}