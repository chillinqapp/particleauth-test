import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as particleAuth from "react-native-particle-auth";
import * as Ethereum from "./react-app-env.d"
import { Env,ParticleInfo,GoerliChain, SupportAuthType } from './LoginInfo';
// Get your project id and client from dashboard,  
// https://dashboard.particle.network/
ParticleInfo.projectId = '9515d6e4-dfac-409a-9c92-24de30df4320'; // your project id
ParticleInfo.clientKey = 'cyFaRFfnyjxZPgOkWQBXLpf1DNXgzPr90C4rQaZh'; // your client key 

const chainInfo = GoerliChain;
const env = Env.Production;
particleAuth.init(chainInfo, env);

const Login = async() =>{
  const type = LoginType.Phone;
const supportAuthType = [SupportAuthType.All];
const result = await particleAuth.login(type, "", supportAuthType, undefined);
if (result.status) {
    const userInfo = result.data;
    console.log(userInfo);
} else {
    const error = result.data;
    console.log(error);
}
}

const MyButton = () => {
  return (
    <TouchableOpacity onPress={Login} style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MyButton;
