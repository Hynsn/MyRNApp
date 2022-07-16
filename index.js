import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SafeAreaView, 
  FlatList,
  StatusBar
} from 'react-native';

// const HelloWorld = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.hello}>Hello, World</Text>
//     </View>
//   );
// };
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center'
//   },
//   hello: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10
//   }
// });

// const ViewBoxesWithColorAndText = () => {
//     return (
//       <View
//         style={{
//           flexDirection: "row",
//           height: 100,
//           padding: 20
//         }}
//       >
//         <View style={{ backgroundColor: "blue", flex: 0.3 }} />
//         <View style={{ backgroundColor: "red", flex: 0.5 }} />
//         <Text>Hello World!</Text>
//       </View>
//     );
//   };
  
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    
  ];
  
  const Item = ({ title }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
  
  const App = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  

AppRegistry.registerComponent(
  'MyReactNativeApp',
  () => App
);