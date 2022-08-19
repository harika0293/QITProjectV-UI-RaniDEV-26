import { StyleSheet,} from 'react-native'
import React from 'react'
import { Layout,Text,Icon,Divider,Input,Button,Datepicker} from '@ui-kitten/components';


const CalendarIcon  = props => <Icon {...props} name="calendar" />;

const DDoctorDetails = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <Layout style={styles.container}>
    <Layout style={styles.Arrow}>
        <Icon style={styles.arrow} fill="#0075A9" name="arrow-back"/>
    </Layout>
    <Text style={{textAlign:'center',top:10,fontFamily:"Recoleta-SemiBold",paddingBottom:30}}>Complete your profile</Text>
    <Divider/>
    <Layout style={styles.input}>
    <Input
      placeholder='First Name'
    />
    <Input
    style={{paddingTop:20}}
      placeholder='Last Name'
    />
    <Input
    style={{paddingTop:20}}
      placeholder='Designation'
    />
    <Input
    style={{paddingTop:20}}
      placeholder='Hospital'
    />
    <Datepicker
          accessoryRight={CalendarIcon}
          size="large"
          date={date}
          onSelect={nextDate => setDate(nextDate)}
          style={{paddingTop:20}}
        />
    <Layout style={styles.Button} level="1">
          <Button style={styles.button} appearance="outline">
            {evaProps => (
              <Text
                {...evaProps}
                style={{ color: '#0F7BAB', fontFamily: 'GTWalsheimPro-Bold',width:70,textAlign:'center' }}>
                Male
              </Text>
            )}
          </Button>
          <Button style={styles.button} appearance="outline" >
          {evaProps => (
            <Text
              {...evaProps}
              style={{ color: '#0F7BAB', fontFamily: 'GTWalsheimPro-Bold',width:70,textAlign:'center' }}>
              Female
            </Text>
            )}
          </Button>
          <Button style={styles.button} appearance="outline" >
            {evaProps => (
              <Text
                {...evaProps}
                style={{ color: '#0F7BAB', fontFamily: 'GTWalsheimPro-Bold',width:70,textAlign:'center' }}>
                Other
              </Text>
            )}
          </Button>
        </Layout>
        <Input
        style={{paddingTop:30}}
          placeholder='Email'
        />
        <Input
        style={{paddingTop:20}}
          placeholder='Phone Number'
        />

        <Button appearance="filled" style={styles.Bsave}>
          {evaProps => (
            <Text
              {...evaProps}
              style={{ color: '#fff', fontFamily: 'GTWalsheimPro-Bold',textAlign:'center' }}>
              Save
            </Text>
            )}
          </Button>
    </Layout>
    
    </Layout>
  )
}

export default DDoctorDetails

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        height:'100%'
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
    input:{
        margin:20,
        paddingTop:20
    },
    Button: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
      },
      buttontrn: {
        marginLeft: 20,
        backgroundColor: 'white',
        borderColor: '#0F7BAB',
        color: '#0F7BAB',
      },
      button: {
        marginLeft: 20,
        borderColor: '#0F7BAB',
      },
      Bsave:{
        marginTop:70,
        backgroundColor:'#0F7BAB',
        borderColor: '#0F7BAB',
      }
})