import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const App = () => {

  const [link, setLink] = useState(null);
  
  const handleChatBot = () => {
    setLink('https://workspacesportal-dev.wolterskluwer.com/');
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

  return (
    <View style = {styles.screenContainer}>
    <View style={styles.webContainer}>
      <View style = {{ width:'100%', height:'100%'}}>
        <WebView 
          source={{ uri: link }} 
          onLoad={console.log('Loaded ${link}')}
        />
      </View> 
    </View>  
    <View style = {styles.button}>
        <Button title="Chat Bot" color="green" onPress={handleChatBot} />
        <Button title="Knowledge Hub" color="#85BC20" onPress={handleKnowledgeHub}/>
        <Button title="Password Reset" color="#007AC3" onPress={handlePasswordReset}/>
        <Button title="WPT SSP" color="orange" onPress={handleWPTSSP} />
        <Button title="Outages" color="#E5202E" onPress={handleOutages}/>
    </View>   
    </View>   
  );
};

const styles = StyleSheet.create({
  webContainer: {
    marginTop: 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenContainer: {
    marginTop: 20,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    flex:1
  },
  button: {
    padding: 10
  },
  
});

export default App;