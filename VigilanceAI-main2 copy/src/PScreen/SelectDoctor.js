import { StyleSheet, Image,  FlatList, SafeAreaView,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import { Layout, Text, Input, Icon,Button } from '@ui-kitten/components';

const SearchIcon = props => <Icon {...props} name="search" />;

const SelectDoctor = ({navigation}) => {
    const doctor = [
        {
          index: "1",
          name: "Dr. Sahil Jhadav",
          msg: "lLorem ipsum dolor sit amet,consectetur adipiscing elit,ua....",
          notification: "6+",
          image: require('../../assets/user.png'),
        },
        {
          index: "2",
          name: "Dr. Sahil Jhadav",
          msg: "lLorem ipsum dolor sit amet,consectetur adipiscing elit,ua....",
          notification: "12+",
          image: require('../../assets/user.png'),
        },
        {
          index: "3",
          name: "Dr. Sahil Jhadav",
          msg: "lLorem ipsum dolor sit amet,consectetur adipiscing elit,ua....",
          notification: "2+",
          image: require('../../assets/user.png'),
        },
      ]
  return (
    <Layout style={styles.Container}>
    <Layout style={styles.topHead}>
        <Text style={{ fontSize: 20, marginTop: 40 }}>Hello!</Text>
        <Icon 
        name="person-outline"
        fill='#8F9BB3'
        style={styles.userImage} />
      </Layout>
      <Text style={styles.DrTeaxt}>Mr Test User</Text>
      <Layout style={styles.Search}>
        <Input
          placeholder='Search....'
          accessoryRight={SearchIcon}
          style={styles.input}
          size="large"
        />
      </Layout>
      <Text style={styles.pText}>Your Doctors</Text>
      <SafeAreaView>
      <FlatList style={styles.textStyle}
          keyExtractor={(key) => {
            return key.index;
          }}
          vertical
          //inverted
          showsVerticalScrollIndicator={false}
          data={doctor}
          renderItem={({ item }) => {
            return (
              <>
              <TouchableOpacity onPress={()=>navigation.navigate('EditProfile')}>
              <Layout style={styles.card}>
                  <Image
                    source={item.image}
                    resizeMode="cover" style={{ height: 60, width: 60, borderRadius: 50,marginTop:10 }}
                  />
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.msg}>{item.msg}</Text>
                  <Text style={styles.noti}>{item.notification}</Text>
                </Layout>
              </TouchableOpacity>
                
              </>
            );
          }}
        />
        
      </SafeAreaView>
      
    </Layout>
  )
}

export default SelectDoctor

const styles = StyleSheet.create({

    Container: {
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
      },
      topHead: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      userImage: {
        width: 50,
        height: 50,
        marginTop: 30,
        borderRadius: 50,
      },
      DrTeaxt: {
        fontSize: 28,
        fontFamily: "Recoleta-Bold",
        color: "#0075A9"
      },
      Search: {
        marginTop: 30,
      },
      input: {
        borderRadius: 30,
        fontFamily: "GTWalsheimPro-Regular"
      },
      pText: {
        fontSize: 25,
        marginTop: 25,
        fontFamily: "Recoleta-Bold",
      },
    card:{
        display:"flex",
        flexDirection:"column",
        backgroundColor: "#F9F9F9",
        width:"100%",
        marginTop:15,
        padding:15,
        paddingBottom:20,
    },
    text:{
        position:"absolute",
        marginTop:10,
        marginLeft:90,
        fontSize:18,
        fontFamily:"GTWalsheimPro-Bold",
    },
    msg:{
        position:"absolute",
        marginTop:40,
        marginLeft:90,
        color:"#D5D5D5",
        fontSize:16,
    },
    noti:{
        position:"absolute",
        right:10,
        backgroundColor:"#FF6969",
        color:"white",
        width:30,
        height:30,
        borderRadius:50,
        paddingTop:4,
        textAlign:"center",
        fontSize:15,
        marginTop:-10
    },
    details:{
        marginTop:20,
        marginHorizontal:75,
        fontSize:15,
        color:"#0075A9",
        fontFamily:"GTWalsheimPro-Bold",
    },
    msgNow:{
        position:"absolute",
        bottom:20,
        right:10,
        fontSize:15,
        fontFamily:"GTWalsheimPro-Bold"
    }
})