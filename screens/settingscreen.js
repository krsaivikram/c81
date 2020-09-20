import React ,{Component} from 'react'
import {View,StyleSheet,TextInput,TouchableOpacity, Alert,Text,Modal,ScrollView, KeyboardAvoidingView} from 'react-native'
import firebase from 'firebase'
import Myheader from '../components/myheader'
import db from '../config'
 
export default class SettingScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Myheader title="Settings" navigation={this.props.navigation}/>
                <View style={styles.formTextInput}>
                  <TextInput style={styles.formTextInput} placeholder={"First Name"} maxLength={10}
                onChangeText={(text)=>{
                    this.setState({firstname:text})
                }}
                value={this.state.firstname}
                />
                  <TextInput style={styles.formTextInput} placeholder={"Last Name"} maxLength={10}
                onChangeText={(text)=>{
                    this.setState({lastname:text})
                }}
                value={this.state.lastname}
                />
                 <TextInput style={styles.formTextInput} placeholder={"Contact"} maxLength={10} keyboardType={"numeric"}
                onChangeText={(text)=>{
                    this.setState({contact:text})
                }}
                value={this.state.contact}
                />
                 <TextInput style={styles.formTextInput} placeholder={"Address"} multiline={true}
                onChangeText={(text)=>{
                    this.setState({address:text})
                   
                }}
                value={this.state.address}
                />
                 <TextInput style={styles.formTextInput} placeholder={"Email id"} keyboardType={"email-address"}
                onChangeText={(text)=>{
                    this.setState({emailid:text})
                }}
                value={this.state.emailid}
                />
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({ container : { flex:1, alignItems: 'center', justifyContent: 'center' }, formContainer:{ flex:1, width:'100%', alignItems: 'center' }, formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, }, button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, buttonText:{ fontSize:25, fontWeight:"bold", color:"#fff" } })