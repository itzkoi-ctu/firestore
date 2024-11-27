import firebase from 'firebase/compat/app';
import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView,StatusBar,Text, View , FlatList, Button, TextInput, TextInputBase, TouchableOpacity} from 'react-native';
import { db, firebaseConfig } from './FireBaseConfig';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import Infomation from './Infomation';


export default function App() {
  return(
      <View style= {styles.container}>
      </View>
      
    
  )

}
const styles= StyleSheet.create({
  container: {
    justifyContent:"center",
    flex: 1
  }
})
