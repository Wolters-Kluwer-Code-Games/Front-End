import React, { useState } from "react";
import { View, Button, Text, StyleSheet, Image,TouchableOpacity ,TextInput} from "react-native";
import { WebView } from 'react-native-webview';
import {MaterialIcons} from '@expo/vector-icons'
import { GiftedChat } from 'react-native-gifted-chat';
import { StatusBar } from 'expo-status-bar';


const App = () => {

  const [link, setLink] = useState(null);
  const [chat, setChat] = useState(null);

const handleChatBot = () => {
  setChat(true);
};

const handleMyAccount = () => {
  setLink('https://myaccount.microsoft.com');
};

const handleKnowledgeHub = () => {
  setLink('https://wolterskluwer.sharepoint.com/sites/GBS-Portal');
};

const handlePasswordReset = () => {
  setLink('https://passwordreset.microsoftonline.com');
};
  
const handleWPTSSP = () => {
  setLink('https://workspacesportal-dev.wolterskluwer.com/');
};
  
const handleOutages = () => {
  setLink('https://twitter.com/MSFT365Status');
}

const BackHome = () => {
  setLink(null);
  setChat(null);
}

const [messages, setMessages] = useState([])
const [inputMessage, setInputMessage] = useState("")
const [outputMessage, setOutputMessage] = useState("Results to be shown here")

const handleButtonClick = () => {
  console.log(inputMessage)
  const message = {
     _id: Math.random().toString(36).substring(7),
    text: inputMessage,
    createdAt: new Date(),
    user: {_id:1}
  }
  setMessages((previousMessages) =>
    GiftedChat.append(previousMessages, [message])
  )
    fetch("https://api.openai.com/v1/chat/completions",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
        body: JSON.stringify({
        "messages": [{"role": "user", "content": inputMessage}],
        "model": "gpt-3.5-turbo"
    })
    }).then((response) => response.json()).then((data) => {
      console.log(data.choices[0].message.content)
      setOutputMessage(data.choices[0].message.content.trim())
      const message = {
        _id: Math.random().toString(36).substring(7),
        text: data.choices[0].message.content.trim(),
        createdAt: new Date(),
        user: {_id:2, name: "Wolters Kluwer"}
      }
        setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [message])
      )
    })
  }

const handleTextInput = (text) => {
  setInputMessage(text)
  console.log(text)
  }

let test;

if (link){
  test = <View style={styles.webContainer}>
  <Button  title="Click here to return to home screen" color="black" onPress={BackHome} style={{marginTop: 10}}/>
  <View style = {{ width:'100%', height:'100%'}}>
    <WebView
      source={{ uri: link }}
      onLoad={console.log('Loaded ${link}')}
    />
  </View>
  </View>  
}
else if(chat){
  test =
    <View style={{flex:1}}>
    <Button  title="Click here to return to home screen" color="black" onPress={BackHome} />
      <View style={{flex:1, justifyContent:"center"}}>
        <GiftedChat messages={messages} renderInputToolbar={() => {}} user={{_id:1}} minInputToolbarHeight={0} />  
      </View>
      <View style = {{flexDirection:"row"}}>
        <View style={{flex:1, marginLeft:10, marginBottom:20, backgroundColor:"white",
                      borderRadius: 10, borderColor: "grey", borderWidth: 1, height: 60, marginLeft: 10, marginRight: 10,
                      justifyContent: "center", paddingLeft: 10, paddingRight: 10}}>
          <TextInput placeholder='Please enter your question' onChangeText={handleTextInput}/>
        </View>
        <TouchableOpacity onPress={handleButtonClick}>
          <View style = {{backgroundColor:"green", padding:5, marginRight:10,marginBottom:20,
                          borderRadius:100, width: 60, height: 60, justifyContent:"center"}}>
            <MaterialIcons name="send" size={30} color="white" style = {{marginLeft:10}}/>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>;
}
else{
  test=<View style = {styles.button}>
    <Image source={require('./assets/teamsn.png')} style={{height:350, width:350, top:-100}} />
    <Button title="My Account" color="darkblue" onPress={handleMyAccount} />
    <Button title="Chat Bot" color="green" onPress={handleChatBot} />
    <Button title="Knowledge Hub" color="#85BC20" onPress={handleKnowledgeHub}/>
    <Button title="Password Reset" color="#007AC3" onPress={handlePasswordReset}/>
    <Button title="WPT SSP" color="orange" onPress={handleWPTSSP} />
    <Button title="Outages" color="#E5202E" onPress={handleOutages}/>
  </View>   ;
}
return (
  <View style = {styles.screenContainer}>
    {test}
  </View>  
  );
};

const styles = StyleSheet.create({
webContainer: { 
  marginTop: 45, 
  flex: 1, 
  backgroundColor: '#fff',  
  //flexDirection: 'row-reverse',  
  //justifyContent: 'left',  
}, 
screenContainer: {  
  marginTop: 0, 
  justifyContent: "flex-end",  
  backgroundColor: "#fff",
  flex:1
},  
button: {  
  //flex: 1, 
  padding: 10, 
  marginBottom:20  
    },
  });
  
export default App;