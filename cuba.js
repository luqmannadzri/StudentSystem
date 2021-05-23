import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import * as firebase from "firebase";
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';

var config = {
  apiKey: "AIzaSyBDXB3OFOOPZMrbN2qzL8p2h_IDaQm5IsA",
  authDomain: "react-native-fire-2afb3.firebaseapp.com",
  projectId: "react-native-fire-2afb3",
  storageBucket: "react-native-fire-2afb3.appspot.com",
  messagingSenderId: "645148772443",
  appId: "1:645148772443:web:fd8860cba336f78d9a977e"
};
// Initialize Firebase
firebase.initializeApp(config);


export default class App extends React.Component {

  constructor (props) {
    super(props); {
      this.state = {
        email: "",
        password: ""
      };
    }

    SignUp = (email, password) => {
      try{

        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user=> {
              console.log(user);
          });
      } catch (error){
        console.log(error.toString(error));
      }

    }

    Login = (email, password) => {
      try{

        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(res => {
              console.log(res.user.email);
          });
      } catch (error){
          console.log(error.toString(error));
        }

    }
  }

  render() {
    return (
      <Container>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input 
              autoCapitalize='none'
              autoCorrect={false} 
              onChangeText={email => this.setState({email})}
  
            />
          </Item>
  
          <Item floatingLabel>
            <Label>Password</Label>
            <Input 
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={password => this.setState({password})}
            />
          </Item>
  
          <Button 
            full rounded success
            onPress={() => this.LogIn(this.state.email, this.state.password)}
            >
            <Text>Login</Text>
          </Button>
  
          <Button 
            full rounded success style={{marginTop: 20}}
            onPress={() => this.SignUp(this.state.email, this.state.password)}
             >
  
          <Text>Sign Up</Text>
          </Button>
  
        </Form>
      </Container>
    );
  
  }

}


