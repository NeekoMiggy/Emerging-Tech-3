// import React, { useState } from "react";
// import { StyleSheet, View } from "react-native";
// import Status from "./Status";
// import MessageList from "./MessageList";
// import {
//   createImageMessage,
//   createLocationMessage,
//   createTextMessage,
// } from "./MessageUtils";

// const App = () => {
//   const [messages] = useState([
//     createImageMessage("https://unsplash.it/690/420"),
//     createTextMessage("I will find you... Hehehe :)"),
//     createTextMessage("Hello, Nhyko Miguel!"),
//     createLocationMessage({
//       latitude: 14.5763,
//       longitude: 121.0851,
//     }),
//   ]);

//   const handlePressMessage = (message) => {
//     console.log("Message pressed", message);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         <MessageList messages={messages} onPressMessage={handlePressMessage} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   content: {
//     flex: 1,
//     backgroundColor: "white",
//     width: "100%",
//   },
//   inputMethodEditor: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   toolbar: {
//     borderTopWidth: 1,
//     borderTopColor: "rgba(0,0,0,0.04)",
//     backgroundColor: "white",
//   },
// });

// export default App;

import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Status from "./Status";
import MessageList from "./MessageList";
import {
 createImageMessage,
 createLocationMessage,
 createTextMessage,
} from "./MessageUtils";

const App = () => {
 const [messages, setMessages] = useState([
    createImageMessage("https://unsplash.it/690/420"),
    createTextMessage("I will find you... Hehehe :)"),
    createTextMessage("Hello, Nhyko Miggyy!"),
    createLocationMessage({
      latitude: 14.5763,
      longitude: 121.0851,
    }),
 ]);

 const handlePressMessage = (message) => {
    if (message.type === "text") {
      Alert.alert(
        "Delete message",
        "Are you sure you want to delete this message?",
        [
          {
            text: "Delete",
            onPress: () => deleteMessage(message),
          },
          {
            text: "Cancel",
            onPress: () => {},
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
 };

 const deleteMessage = (messageToDelete) => {
    const updatedMessages = messages.filter(
      (message) => message.id !== messageToDelete.id
    );
    setMessages(updatedMessages);
 };

 return (
    <View style={styles.container}>
      <View style={styles.content}>
        <MessageList messages={messages} onPressMessage={handlePressMessage} />
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
 },
 content: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
 },
 inputMethodEditor: {
    flex: 1,
    backgroundColor: "white",
 },
 toolbar: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.04)",
    backgroundColor: "white",
 },
});

export default App;
