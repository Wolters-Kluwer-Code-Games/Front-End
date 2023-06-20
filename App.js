import React, { useState } from "react";
import { View, Button, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { WebView } from 'react-native-webview';
import { MaterialIcons } from '@expo/vector-icons';
import { GiftedChat } from 'react-native-gifted-chat';
import { StatusBar } from 'expo-status-bar';
import { Linking } from "react-native";
import { IconButton } from 'react-native-paper';
import * as Notifications from 'expo-notifications';

const Menu = ({ handleFavoriteButton, favorites }) => {
  const [showGBS, setShowGBS] = useState(false);
  const [showHealth, setShowHealth] = useState(false);
  const [showESG, setShowESG] = useState(false);

  const handleGBSButton = () => {
    setShowGBS(!showGBS);
  };

  const handleHealthButton = () => {
    setShowHealth(!showHealth);
  }

  const handleESGButton = () => {
    setShowESG(!showESG);
  }


  return (
    <View style={styles.menuContainer}>
    
      <TouchableOpacity onPress={handleGBSButton} style={[styles.submenuItem, { backgroundColor: '#fffff'}]}>
        <Text style={[styles.buttonText, { color: 'black' }]}>GBS</Text>
      </TouchableOpacity>

      {showGBS && (
        <View style={styles.subMenuContainer}>
          <TouchableOpacity onPress={() => handleFavoriteButton('MyWKAccount')} style={[styles.menuItem, favorites.includes('WKMyAccount') && styles.favoriteItem, { backgroundColor: '#409BD2'}]}>
        <Text style={styles.buttonText}>My WK Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleFavoriteButton('GBSResources')} style={[styles.menuItem, favorites.includes('GBSResources') && styles.favoriteItem,  { backgroundColor: '#85BC20'}]}>
            <Text style={styles.buttonText}> GBS Resources</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFavoriteButton('PasswordReset')} style={[styles.menuItem, favorites.includes('PasswordReset') && styles.favoriteItem, {backgroundColor: '#007AC3'}]}>
        <Text style={styles.buttonText}>Password Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleFavoriteButton('WPTSSP')} style={[styles.menuItem, favorites.includes('WPTSSP') && styles.favoriteItem, {backgroundColor: '#939393'}]}>
        <Text style={styles.buttonText}>WPT SelfService Portal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleFavoriteButton('Outages')} style={[styles.menuItem, favorites.includes('Outages') && styles.favoriteItem, {backgroundColor: '#E5202E'}]}>
        <Text style={styles.buttonText}>M365 Outages</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleFavoriteButton('PagerDuty')} style={[styles.menuItem, favorites.includes('PagerDuty') && styles.favoriteItem, {backgroundColor: 'purple'}]}>
        <Text style={styles.buttonText}>Pager Duty</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleFavoriteButton('WorkDay')} style={[styles.menuItem, favorites.includes('WorkDay') && styles.favoriteItem, {backgroundColor: '#D59F22'}]}>
        <Text style={styles.buttonText}>WorkDay</Text>
      </TouchableOpacity>
        </View>
      )}

    <TouchableOpacity onPress={handleHealthButton} style={[styles.submenuItem, { backgroundColor: '#fffff'}]}>
        <Text style={[styles.buttonText, { color: 'black' }]}>Health</Text>
      </TouchableOpacity>

      {showHealth && (
        <View style={styles.subMenuContainer}>
          <TouchableOpacity onPress={() => handleFavoriteButton('UpToDate')} style={[styles.menuItem, favorites.includes('UpToDate') && styles.favoriteItem, { backgroundColor: '#409BD2'}]}>
        <Text style={styles.buttonText}>UpToDate</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleFavoriteButton('Ovid')} style={[styles.menuItem, favorites.includes('Ovid') && styles.favoriteItem,  { backgroundColor: '#85BC20'}]}>
            <Text style={styles.buttonText}>Ovid</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity onPress={handleESGButton} style={[styles.submenuItem, { backgroundColor: '#fffff'}]}>
        <Text style={[styles.buttonText, { color: 'black' }]}>ESG</Text>
      </TouchableOpacity>

      {showESG && (
        <View style={styles.subMenuContainer}>
          <TouchableOpacity onPress={() => handleFavoriteButton('OneSumX')} style={[styles.menuItem, favorites.includes('OneSumX') && styles.favoriteItem, { backgroundColor: '#409BD2'}]}>
        <Text style={styles.buttonText}>OneSumX</Text>
      </TouchableOpacity>
        </View>
      )}
    </View>
  );
};


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

Notifications.scheduleNotificationAsync({
  content: {
    title: "Password Expiring in 7 days!",
    body: 'Use the Password Reset button to change the password before your expiration date!',
  },
  trigger: {
    seconds: 10,
  },
});

const App = () => {
  const [link, setLink] = useState(null);
  const [chat, setChat] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteButton = (buttonName) => {
    if (favorites.includes(buttonName)) {
      setFavorites(favorites.filter((name) => name !== buttonName));
    } else {
      setFavorites([...favorites, buttonName]);
    }

    if (buttonName === 'MyWKAccount') {
      Linking.openURL('https://myaccount.microsoft.com');
    } else if (buttonName === 'ChatBot') {
      Alert.alert(
    'Notice',
    'For confidential data and workplace support, use the "WK IT ServiceDesk". For general queries, use the chat bot. Click "Continue" to proceed.',
    [
      {
        text: 'Connect to WK IT ServiceDesk',
        onPress: () => {
          Linking.openURL('https://teams.microsoft.com/l/chat/0/0?users=28:e87e3011-e8db-4cbf-bb35-2f25f54eb32c');
          // Perform actions for chat bot option
          // You can add your logic here for handling the chat bot
        },
      },
      {
        text: 'Continue',
        onPress: () => {
          setLink('http://test-bucket-cgapie.s3-website-us-east-1.amazonaws.com');
          // Perform any additional actions here after the user presses "Continue"
        },
      },
    ],
    { cancelable: false }
    );
    } else if (buttonName === 'GBSResources') {
      Linking.openURL('https://wolterskluwer.sharepoint.com/sites/GBS-Portal');
    } else if (buttonName === 'PasswordReset') {
      Linking.openURL('https://passwordreset.microsoftonline.com');
    } else if (buttonName === 'WPTSSP') {
      setLink('https://workspacesportal-dev.wolterskluwer.com/');
    } else if (buttonName === 'Outages') {
      Linking.openURL('https://twitter.com/MSFT365Status');
    } else if (buttonName === 'PagerDuty') {
      Linking.openURL('https://wolterskluwer.pagerduty.com/incidents');
    } else if (buttonName === 'WorkDay') {
      Linking.openURL('https://wd3.myworkday.com/wk/d/home.htmld');
    }
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleChatBot = () => {
    Alert.alert(
    'Notice',
    'For confidential data and workplace support, use the "WK IT ServiceDesk". For general queries, use the chat bot. Click "Continue" to proceed.',
    [
      {
        text: 'Connect to WK IT ServiceDesk',
        onPress: () => {
          Linking.openURL('https://teams.microsoft.com/l/chat/0/0?users=28:e87e3011-e8db-4cbf-bb35-2f25f54eb32c');
          // Perform actions for chat bot option
          // You can add your logic here for handling the chat bot
        },
      },
      {
        text: 'Continue',
        onPress: () => {
          setLink('http://test-bucket-cgapie.s3-website-us-east-1.amazonaws.com');
          // Perform any additional actions here after the user presses "Continue"
        },
      },
    ],
    { cancelable: false }
    );
  };

  const BackHome = () => {
    setLink(null);
    setChat(null);
  }

  let test;

  if (link) {
    // WebView code here
    test = (
      <View style={styles.webContainer}>
        <Button title="Click here to return to home screen" color="black" onPress={BackHome} />
        <View style={{ width:'100%', height:'100%'}}>
          <WebView
            source={{ uri: link }}
            onLoad={() => console.log(`Loaded ${link}`)}
          />
        </View>
      </View>  
    );
  } else if (chat) {
    test = (
      <View style={{ flex: 1 }}>
        <Button title="Click here to return to home screen" color="black" onPress={BackHome} />
        <View style={{ flex: 1, justifyContent: "center"}}>
          <GiftedChat messages={messages} renderInputToolbar={() => {}} user={{_id:1}} minInputToolbarHeight={0} />  
        </View>
        {/* Add input and send button */}
      </View>
    );
  } else {
    test = (
      <View style={styles.screenContainer}>
        <TouchableOpacity onPress={handleToggleMenu} style={styles.menuButton}>
          <MaterialIcons name="menu" size={24} color="black" />
          <Text style={styles.menuButtonText, {paddingTop:3}}>Menu</Text>
        </TouchableOpacity>
        {showMenu && (
          <Menu handleFavoriteButton={handleFavoriteButton} favorites={favorites} />
        )}
        <Image source={require('./logo.png')} style={{ height: 50, width: 380, top: -350 }} /> 
        <View style={styles.chatBotIconContainer}>
          <TouchableOpacity onPress={handleChatBot}>
            <Image source={require('./newbot.png')} style={styles.chatBotIcon} />
          </TouchableOpacity>
        </View> 
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {test}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: 'white',
  },
  webContainer: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  screenContainer: {
    marginTop: 0,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    flex: 1,
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
    flexDirection: 'row',
  },
  menuContainer: {
    position: 'absolute',
    top: 58,
    left: 15,
    zIndex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  subMenuContainer: {
    marginTop: 5,
  },
  submenuItem: {
    marginBottom: 1,
    marginLeft: 5,
    borderRadius: 2,
    paddingLeft: 8,
  },
  menuItem: {
    marginBottom: 1,
    borderRadius: 2,
    paddingLeft: 8,
    marginLeft:20,
    width:180,
  },
  menuButtonText: {
    marginLeft: 4,
  },
  chatBotIconContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  chatBotIcon: {
    width: 80,
    height: 80,
  },
  
});

export default App;
