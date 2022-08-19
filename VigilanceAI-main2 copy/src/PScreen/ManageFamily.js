import { StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Layout, Text, Icon, Divider, Button } from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";

const ManageFamily = () => {
  const navigation = useNavigation();
  const member = [
    {
      index: '1',
      name: 'Rani Patel',
      gen: 'Female',
      relation: 'Self',
      age: '21',
      image: require('../../assets/user.jpg'),
      dob: '04 Dec 2000',
    },
    {
      index: '2',
      name: 'Dakshita Patel',
      gen: 'Female',
      relation: 'Daughter',
      age: '21',
      image: require('../../assets/user.jpg'),
      dob: '04 Dec 2000',
    },
  ];
  return (
    <Layout style={styles.container}>
      <Layout style={styles.Arrow}>
        <Icon style={styles.arrow} fill="#0075A9" name="arrow-back" />
      </Layout>
      <Text style={{
        textAlign: 'center', top: 10, fontFamily: "Recoleta-SemiBold", paddingBottom: 30,
        textTransform: "uppercase"
      }}>Manage Family Member</Text>
      <Divider />
      <SafeAreaView>
      <TouchableOpacity onPress={()=> navigation.navigate('EditProfile')}>
      <FlatList
      keyExtractor={(key) => {
        return key.index;
      }}
      vertical
      //inverted
      showsVerticalScrollIndicator={false}
      data={member}
      renderItem={({ item }) => {
        return (
          <>
            <Layout style={styles.card}>
              <Image
                source={item.image}
                resizeMode="cover" style={{ height: 60, width: 60, borderRadius: 50, marginTop: 10 }}
              />
              <Layout style={styles.text}>
                <Text style={styles.name}>{item.name}</Text>
                <Layout style={styles.detail}>
                  <Text style={styles.rel}>{item.relation} {'|'} </Text>
                  <Text style={styles.gen}>{item.gen} {'|'} </Text>
                  <Text style={styles.age}>{item.age} </Text>
                </Layout>
                <Text style={styles.dob}>DOB: {item.dob}</Text>
              </Layout>
            </Layout>
          </>
        );
      }}
    />
      </TouchableOpacity>
       
      </SafeAreaView>
      <Button style={styles.button}
        onPress={() => navigation.navigate('Addnew')}>
        Add New People</Button>
    </Layout>
  )
}

export default ManageFamily

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: '100%'
  },
  Arrow: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 10,
    left: 20,
  },
  arrow: {
    height: 30,
    width: 30,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    padding: 15,
    paddingBottom: 40,
    marginHorizontal: 30,
    marginTop: 20,
    borderRadius: 10
  },
  text: {
    display: 'flex',
    position: 'absolute',
    right: 90,
    backgroundColor: 'transparent',
  },
  name: {
    marginTop: 15,
    fontFamily: 'Recoleta-Medium',
    fontSize: 18
  },
  detail: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  rel: {
    textTransform: "uppercase",
    fontSize: 12,
    color: '#0075A9',
    fontFamily: 'GTWalsheimPro-Bold'
  },
  gen: {
    textTransform: "uppercase",
    fontSize: 12,
    color: '#0075A9',
    fontFamily: 'GTWalsheimPro-Bold',

  },
  age: {
    textTransform: "uppercase",
    fontSize: 12,
    color: '#0075A9',
    fontFamily: 'GTWalsheimPro-Bold'
  },
  dob: {
    marginTop: 10,
    fontSize: 15,
    fontFamily: 'GTWalsheimPro-Regular'
  },
  button: {
    marginTop: 350,
    marginHorizontal: 30,
    backgroundColor: '#0075A9',
    borderColor: '#0075A9'
  }
})