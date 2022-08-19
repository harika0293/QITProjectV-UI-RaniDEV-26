import { StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Layout, Text, Icon, Divider, Input, Button,IndexPath, Select, SelectItem,Datepicker} from '@ui-kitten/components';

const CalendarIcon  = props => <Icon {...props} name="calendar" />;
const data = [
    'Self',
    'Daughter',
    'Mother',
    'Wife'
  ];
const DEditProfile = ({navigation}) => {
  const [date, setDate] = React.useState(new Date());
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];
  const renderOption = (title) => (
    <SelectItem title={title}/>
  );
    return (
       
        <Layout style={styles.container}>
        <Layout style={styles.Arrow}>
        <Icon  onPress={() => navigation.navigate('PSetting')} style={styles.arrow} fill="#0075A9" name="arrow-back"/>
        </Layout>
        <Text style={{
            textAlign: 'center', top: 10, fontFamily: "Recoleta-SemiBold", paddingBottom: 30,
            textTransform: "uppercase"
        }}>Edit Profile</Text>
        <Divider />
        <ScrollView>
        <Layout style={styles.mainContainer}>
        <Image source={require("../../assets/user.png")} style={styles.image}/>
            <Input
                placeholder='First Name '
                label={evaProps => <Text {...evaProps} style={{ fontFamily: "GTWalsheimPro-Bold", marginBottom: 5, }}>Full Name</Text>}
            />
            <Input
                placeholder='Last Name '
                style={styles.input}
                
            />
            <Input
                placeholder='Designation'
                style={styles.input}
                label={evaProps => <Text {...evaProps} style={{ fontFamily: "GTWalsheimPro-Bold", marginBottom: 5, }}>Designation</Text>}
            />
            <Input
                placeholder='Hospital'
                style={styles.input}
                label={evaProps => <Text {...evaProps} style={{ fontFamily: "GTWalsheimPro-Bold", marginBottom: 5, }}>Hospital</Text>}
            />
            <Input
                placeholder='Year Of Experiance'
                style={styles.input}
                label={evaProps => <Text {...evaProps} style={{ fontFamily: "GTWalsheimPro-Bold", marginBottom: 5, }}>Experiance</Text>}
            />
            <Datepicker
                label={evaProps => <Text {...evaProps} style={{ fontFamily: "GTWalsheimPro-Bold", marginBottom: 5, }}>Date</Text>}
                accessoryRight={CalendarIcon}
                size="large"
                date={date}
                onSelect={nextDate => setDate(nextDate)}
                style={{top:10}}
            />
            <Text style={{ marginTop: 20,fontFamily: "GTWalsheimPro-Bold" }}>Gender</Text>
            <Layout style={styles.Button} level="1">
                <Button style={styles.button} appearance="outline">
                    {evaProps => (
                        <Text
                            {...evaProps}
                            style={{ color: '#0F7BAB', fontFamily: 'GTWalsheimPro-Bold', width: 60, textAlign: 'center' }}>
                            Male
                        </Text>
                    )}
                </Button>
                <Button style={styles.button} appearance="outline" >
                    {evaProps => (
                        <Text
                            {...evaProps}
                            style={{ color: '#0F7BAB', fontFamily: 'GTWalsheimPro-Bold', width: 60, textAlign: 'center' }}>
                            Female
                        </Text>
                    )}
                </Button>
                <Button style={styles.button} appearance="outline" >
                    {evaProps => (
                        <Text
                            {...evaProps}
                            style={{ color: '#0F7BAB', fontFamily: 'GTWalsheimPro-Bold', width: 50, textAlign: 'center' }}>
                            Other
                        </Text>
                    )}
                </Button>
            </Layout>
            <Input
                placeholder='name@email.com'
                style={styles.input}
                label={evaProps => <Text {...evaProps} style={{ fontFamily: "GTWalsheimPro-Bold", marginBottom: 5, }}>Email Address</Text>}
            />
            <Input
                placeholder='Phone Number'
                style={styles.input}
                label={evaProps => <Text {...evaProps} style={{ fontFamily: "GTWalsheimPro-Bold", marginBottom: 5, }}>Phone Number</Text>}
            />
        </Layout>
        <Layout style={styles.bottomButton}>
        <Button style={styles.cancel}>Cancel</Button>
        <Button style={styles.save}
        onPress={()=>navigation.navigate('DSetting')}>Save</Button>
        </Layout>
        </ScrollView>
    </Layout>
        
       
    )
}

export default DEditProfile

const styles = StyleSheet.create({
    container: {
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
    mainContainer: {
        backgroundColor: '#F9F9F9',
        marginHorizontal: 30,
        top: 30,
        padding: 30
    },
    input: {
        marginTop: 15
    },
    Button: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        backgroundColor: 'transparent'
    },
    buttontrn: {
        backgroundColor: 'white',
        borderColor: '#0F7BAB',
        color: '#0F7BAB',
    },
    button: {
        marginLeft: 10,
        borderColor: '#0F7BAB',
    },
    image:{
        width:50,
        height:50,
        position:'absolute',
        top:-25,
        right:10
    },
    bottomButton:{
        display:'flex',
        flexDirection:'row',
        marginHorizontal:30,
        top:40,
        marginBottom:50
    },
    cancel:{
        width:150,
        backgroundColor:'#0F7BAB',
        borderColor:'#0F7BAB'
    },
    save:{
        width:150,
        backgroundColor:'#0F7BAB',
        borderColor:'#0F7BAB',
        left:30
    }
})