import firebase from 'firebase/compat/app';
import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView,StatusBar,Text, View , FlatList, Button, TextInput, TextInputBase, TouchableOpacity} from 'react-native';
import { db, firebaseConfig } from './FireBaseConfig';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

export default function  Information(){
    const [postList, setPostList] = useState();
    const [isLoading, setIsLoading] = useState(true)
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [editName,setEditName] = useState();
    const [editAddress,setEditAddress] = useState()
    
    //Them du lieu
  const postData = async () => {
    try{
      const docRef = await addDoc(collection(db,"user"),
    {
      name: name,
      address: address,
    })
    console.log("userID added:",docRef.id)
    }catch(error){
      console.log(error)
    }
  }
  const getData = async () => {
    
    try{
      const querySnapshot = await getDocs(collection(db,"user"))
      querySnapshot.docs.forEach((doc)=>{
        console.log(doc.id,"", doc.data())
      }) 
    }catch(error){
      console.log(error)
  }}
  const putData = async() => {
    
    console.log("lkaj")
    
    try{
    const querySnapshot= await getDocs(collection(db,"user"))
    querySnapshot.docs.forEach(async (document)  =>{
      if(document.data().name== name){
        const userId= document.id
        console.log("idEdit==", userId)
        await updateDoc(doc(db,"user",userId),{  
          name: name, 
          address: address
        })
      }

    })
  }catch(error){
    console.log("Khong the cap nhat", error)
  }
    
  
  }
  const deleteData = async () =>{
    try{
      const querySnapshot= await getDocs(collection(db,"user"))
      querySnapshot.docs.forEach(async(doccument)=>{
        if(doccument.data().name==name){
          const id= doccument.id;
          await deleteDoc(doc(db,"user",id))
          console.log("xoa thanh cong userId"+id)
        }
      })
    }catch(error){
      console.log("loi xoa user"+ error);
    }
  }
  
  
 
 
  return (

    

    <SafeAreaView style= {styles.container}>
      <View style={styles.listContainer}>
        
              <View>
                  <TextInput  autoCapitalize="words" style={styles.input} title="Id" placeholder="Enter Id" onChangeText={(value) => setId(value)} value={id}/>
                  <TextInput style={styles.input} title="Name" placeholder="Enter Name" onChangeText={(value) => setName(value)} value={name}/>
                  <TextInput style={styles.input} title="Address" placeholder="Enter Address" onChangeText={(value) => setAddress(value)} value={address}/>

              </View>
              <View style= {{alignItems: 'center', justifyContent: 'space-between'}} >
                <TouchableOpacity  style={styles.button} title="Add Data" onPress={()=> postData() } >
                  <Text>Add Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} title="Add Data" onPress={()=> getData()} >
                  <Text> Get Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} title="Edit Data" onPress={()=> putData()} >
                  <Text>Edit Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} title="Delete Data" onPress={()=> deleteData()} >
                  <Text>Delete Data</Text>
                </TouchableOpacity>

                
              </View>
            
          
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  bodyText: {
    fontSize: 24,
    color: '#666666',

  },
  titleText: {
    fontSize: 30
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    width: '40%',
    borderRadius: 5,
  },

});
