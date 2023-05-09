import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const App = () => {

const handleChatBot = () => {
  <View style={styles.container}>
        <View style = {{ width:'100%', height:'100%'}}>
          <WebView 
            source={{ uri: 'https://workspacesportal-dev.wolterskluwer.com/' }} 
            onLoad={console.log('Loaded!')}
          />
        </View> 
  </View>  
}

const handleKnowledgeHub = () => {
  <View style={styles.container}>
    <View style = {{ width:'100%', height:'100%'}}>
      <WebView 
        source={{ uri: 'https://workspacesportal-dev.wolterskluwer.com/' }} 
        onLoad={console.log('Loaded!')}
      />
    </View> 
  </View> 
}

const handlePasswordReset = () => {
<View style={styles.container}>
    <View style = {{ width:'100%', height:'100%'}}>
      <WebView 
        source={{ uri: 'https://workspacesportal-dev.wolterskluwer.com/' }} 
        onLoad={console.log('Loaded!')}
      />
    </View> 
  </View> 
}

const handleWPTSSP = () => {
<View style={styles.container}>
    <View style = {{ width:'100%', height:'100%'}}>
      <WebView 
        source={{ uri: 'https://workspacesportal-dev.wolterskluwer.com/' }} 
        onLoad={console.log('Loaded!')}
      />
    </View> 
  </View>   
}

const handleOutages = () => {
<View style={styles.container}>
    <View style = {{ width:'100%', height:'100%'}}>
      <WebView 
        source={{ uri: 'https://twitter.com/MSFT365Status' }} 
        onLoad={console.log('Loaded!')}
      />
    </View> 
  </View>  
}

  return (
    <>
    <View style = {styles.screenContainer}>
      <View style = {styles.button}>
        <Button title="Chat Bot" color="green" onPress={handleChatBot} />
      </View >
      <View style = {styles.button}>
        <Button title="Knowledge Hub" color="#85BC20" onPress={handleKnowledgeHub}/>
      </View>
      <View style = {styles.button}>
        <Button title="Password Reset" color="#007AC3" onPress={handlePasswordReset}/>
      </View>
      <View style = {styles.button}>
        <Button title="WPT SSP" color="orange" onPress={handleWPTSSP} />
      </View>
      <View style = {styles.button}>
        <Button title="Outages" color="#E5202E" onPress={handleOutages}/>
      </View>
    </View>   
    </>    
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "flex-end",
    backgroundColor: "#474747",
    flex:1
  },
  button: {
    padding: 10
  },
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;