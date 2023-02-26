import { View, Text, FlatList,StyleSheet,TouchableOpacity,PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Contacts from 'react-native-contacts'
import {useIsFocused} from '@react-navigation/native'
import ContactCard from '../components/ContactCard';

const MyContact = ({navigation}) => {

const isFocused=useIsFocused()  

const [myContacts,setMyContacts]=useState([])

useEffect(()=>{
    getAllContacts()
},[isFocused])

async function getAllContacts(){
    try{
        const permission=await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS
        )
        if(permission==='granted'){
            const contacts=await Contacts.getAll()
            console.log(contacts);
            setMyContacts(contacts)
        }
    }catch(e){
        console.log(e)
    }
}

  return (
    <View style={styles.container}>
      <Icon
        name='add-circle'
        size={60}
        color='green'
        style={styles.addIcon}
        onPress={()=>navigation.navigate('CreateContact')}
      />
      <FlatList
        data={myContacts}
        keyExtractor={(item)=>item.recordID}
        renderItem={({item})=>(
          <TouchableOpacity onPress={() => navigation.navigate('Profile', {
                  contactInfo: { id: item.recordID}
               })}>
            <ContactCard contactInfo={item}/>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default MyContact

const styles=StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white'
  },
  addIcon: {
    bottom: 20,
    right: 20,
    position: 'absolute',
    zIndex: 1,
  }
})