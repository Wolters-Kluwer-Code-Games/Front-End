import React, { useState } from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import { WebView } from 'react-native-webview';

const App = () => {

  const [link, setLink] = useState(null);
  const [isImageVisible, setImageVisible] = useState(true);
  const [isWebViewLoaded, setWebViewLoaded] = useState(false);
  
  const handleChatBot = () => {
    setLink('http://localhost:19006');
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
      
      <View style = {{ width:'100%', height:'100%', resizeMode: 'stretch'}}>
      {isImageVisible && !isWebViewLoaded && <Image source={require('./assets/teamsn.png')} style={{height:350, width:350 }} />}
        <WebView 
          source={{ uri: link }} 
          //onLoad={console.log('Loaded ${link}')}
          //onLoad={() => setImageVisible(false)}
          onLoad={() => {setWebViewLoaded(true); setImageVisible(false);}}
        />
      </View> 
    </View>  
    <View style = {styles.button} >
        <Button title="Chat Bot" color="#374F0E" onPress={handleChatBot}  />
        <Button title="GBS Resource Hub" color="#85BC20" onPress={handleKnowledgeHub} />
        <Button title="Password Reset" color="#007AC3" onPress={handlePasswordReset} />
        <Button title="WPT Self Service Portal" color="#939393" onPress={handleWPTSSP}  />
        <Button title="M365 Outages" color="#E5202E" onPress={handleOutages} />
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
    justifyContent: 'flex-end',
    backgroundColor: "#fff",
    flex:1
  },
  button: {
    padding: 12,
    margin: 5,
  },  
});

export default App;