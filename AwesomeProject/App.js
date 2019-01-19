import React, { Component } from 'react';
import ReactView from  "./reactView"
//import CLFButton from "./CLFButton"
import {
  StyleSheet,
  Dimensions,
} from "react-native";

const {deviceWidth,deviceHeight} = Dimensions.get('window')

export default class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
       <ReactView style={styles.imageViewStyle} propertyArr = {["two","nomal"]} ></ReactView>
       //<CLFButton style={styles.datePickerView} normalTitle={"正常模式"} selectedTitle={"按下模式"}></CLFButton>
    );
  }
}


const styles = StyleSheet.create({
  imageViewStyle: {
      backgroundColor: "#FFFFFF",
      marginLeft:50,
      marginTop: 100,
      width: deviceWidth - 100,
      height: 400
  },
    datePickerView: {
      backgroundColor: "#000",
      top: 100,
      width: Dimensions.get('window').width,
      height: 400
  },
});







// /////下面这个demo是倒入原生地图
// import React, { Component } from 'react';
// import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View} from 'react-native';
// import { NativeModules } from "react-native"
// import MapView from './MapView.js';

// // class App extends React.Component {
// //   onREgionChage(event) {
// //     //Do stuff with event.region.latitude, etc.
// //   }
// // }

// export default class App extends Component {
//   onRegionChange(event) {
//     // Do stuff with event.region.latitude, etc.
//   }
//   render() {
//     var region = {
//       latitude: 37.48,
//       longitude: -122.16,
//       latitudeDelta: 0.1,
//       longitudeDelta: 0.1,
//     };
//     return (
//       <MapView
//         region={region}
//         zoomEnabled={true}
//         onRegionChange={this.onRegionChange}
//         style={{ flex: 1 }}
//       />
//     );
//   }
// }




// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


// export default class Touchables extends Component {
//   // _onPressButton() {
//   //   Alert.alert('You tapped the button!')

//   //   // const CalendarManager = NativeModules.CalendarManager;
//   //   // CalendarManager.addEvent("Birthday Party", "4 Privet Drive, Surrey");
//   // }

//   // _onLongPressButton() {
//   //   Alert.alert('You long-pressed the button!')
//   // }
//     // const CalendarManager = NativeModules.AwesomeCalendarManager;
//     // //CalendarManager.addEvent("Birthday Party", "4 Privet Drive, Surrey");
//     // var date = new Date()
//     // CalendarManager.addEvent(    //这种是一种很好的写法
//     //   "Birthday Party",{
//     //   location: "4 Privet Drive,Surrey",
//     //   time: date.getTime(),
//     //   descreiption: "..."
//     //   }
//     // ); // 把日期以ISO-8601的字符串形式传递
//     // console.log("时间是 %o",date.getTime());

//     // CalendarManager.findEvents((error,events) => {
//     //   if (error) {
//     //     console.error(error);
//     //   } else {
//     //     console.log("回掉正确");
//     //     //this.setState({events: events});
//     //   }
//     // });
    
//    //console.log(CalendarManager.firstDayOfTheWeek);

//   //return (
//   //     <View style={styles.container}>
//   //       <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//   //         <View style={styles.button}>
//   //           <Text style={styles.buttonText}>TouchableHighlight</Text>
//   //         </View>
//   //       </TouchableHighlight>
//   //       <TouchableOpacity onPress={this._onPressButton}>
//   //         <View style={styles.button}>
//   //           <Text style={styles.buttonText}>TouchableOpacity</Text>
//   //         </View>
//   //       </TouchableOpacity>
//   //       <TouchableNativeFeedback
//   //           onPress={this._onPressButton}
//   //           background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//   //         <View style={styles.button}>
//   //           <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//   //         </View>
//   //       </TouchableNativeFeedback>
//   //       <TouchableWithoutFeedback
//   //           onPress={this._onPressButton}
//   //           >
//   //         <View style={styles.button}>
//   //           <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//   //         </View>
//   //       </TouchableWithoutFeedback>
//   //       <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//   //         <View style={styles.button}>
//   //           <Text style={styles.buttonText}>Touchable with Long Press</Text>
//   //         </View>
//   //       </TouchableHighlight>
//   //     </View>
//   //   );
//   // }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// })
