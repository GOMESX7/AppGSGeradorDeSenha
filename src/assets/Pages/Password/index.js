import {useState, useEffect} from 'react'
import {View , Text, StyleSheet, FlatList, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../../hooks/useStorage'

import {PasswordItem} from '../Password/components/passwordItem'


export function Password(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const { getItem , removeItem} = useStorage();


    useEffect(() => {
        async function loadPasswords(){
          const passwords = await getItem("@pass")
          setListPasswords(passwords);

        }

        loadPasswords();
    }, [focused])


    async function handleDeletePassword(item){
        const passwords= await removeItem("@pass", item)
        setListPasswords(passwords)
    }


return(


<SafeAreaView style={{flex:1, backgroundColor: "#F3F3FF"}}>
    <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
        </View>

        <View style={styles.avisoDelete}>
            <Text style={styles.textAviso}>Pressione e Segure para DELETAR uma senha !</Text>
        </View>

        <View style={styles.content}>
            <FlatList
            style={{flex:1, paddingTop:14,}}
            data={listPasswords}
            keyExtractor={(item) => String(item)}
            renderItem={({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)}/> }

            />

        
    </View>
</SafeAreaView> 

)}

const styles = StyleSheet.create({
header:{
    backgroundColor: "#0e0e0e",
    paddingTop: 40,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
},
title:{
    color:"#FFF",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 12
},
content:{
    flex:1,
    paddingLeft: 14,
    paddingRight: 14
},
avisoDelete:{    
    paddingTop: 12,
    paddingLeft: 12,
    paddingLeft: 12
}, 
textAviso:{
    fontSize: 15,
    color: '#828282'
}

})