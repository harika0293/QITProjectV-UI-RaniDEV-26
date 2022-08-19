import { StyleSheet } from 'react-native'
import React from 'react'
import { Layout, Text, Icon, Divider, Input, Button, IndexPath, Select, SelectItem,Datepicker} from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";

const CalendarIcon = props => <Icon {...props} name="calendar" />;
const data = [
  'Self',
  'Daughter',
  'Mother',
  'Wife'
];
const PPatientDetails = () => {
  const [date, setDate] = React.useState(new Date());
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];
  const renderOption = (title) => (
    <SelectItem title={title} />
  );

  return (
    <Layout style={styles.container}>
      <Layout style={styles.Arrow}>
        <Icon style={styles.arrow} fill="#0075A9" name="arrow-back" />
      </Layout>
      <Text style={{ textAlign: 'center', top: 10, fontFamily: "Recoleta-SemiBold", paddingBottom: 30 }}>Complete your profile</Text>
      <Divider />
      <Layout style={styles.input}>
        <Input
          placeholder='First Name *'
        />
        <Input
          style={{ paddingTop: 20 }}
          placeholder='Last Name *'
        />
        <Datepicker
          accessoryRight={CalendarIcon}
          size="large"
          date={date}
          onSelect={nextDate => setDate(nextDate)}
          style={styles.select}
        />
        <Layout style={styles.Button} level="1">
          <Button style={styles.button} appearance="outline">
            {evaProps => (
              <Text
                {...evaProps}
                style={{ color: '#0F7BAB', fontFamily: 'GTWalsheimPro-Bold', width: 70, textAlign: 'center' }}>
                Male
              </Text>
            )}
          </Button>
          <Button style={styles.button} appearance="outline" >
            {evaProps => (
              <Text
                {...evaProps}
                style={{ color: '#0F7BAB', fontFamily: 'GTWalsheimPro-Bold', width: 70, textAlign: 'center' }}>
                Female
              </Text>
            )}
          </Button>
          <Button style={styles.button} appearance="outline" >
            {evaProps => (
              <Text
                {...evaProps}
                style={{ color: '#0F7BAB', fontFamily: 'GTWalsheimPro-Bold', width: 70, textAlign: 'center' }}>
                Other
              </Text>
            )}
          </Button>
        </Layout>
        <Select
          style={styles.select}
          placeholder='Default'
          value={displayValue}
          onSelect={index => setSelectedIndex(index)}>
          {data.map(renderOption)}
        </Select>
        <Input
          style={{ paddingTop: 30 }}
          placeholder='Email *'
        />
        <Input
          style={{ paddingTop: 20 }}
          placeholder='Phone Number *'
        />
        <Button appearance="filled" style={styles.Bsave}
          onPress={() => navigation.navigate('ManageFamily')}>
          {evaProps => (
            <Text
              {...evaProps}
              style={{ color: '#fff', fontFamily: 'GTWalsheimPro-Bold', textAlign: 'center' }}>
              Save
            </Text>
          )}

        </Button>
      </Layout>

    </Layout>
  )
}

export default PPatientDetails
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
  input: {
    margin: 20,
    paddingTop: 20
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
  Bsave: {
    marginTop: 70,
    backgroundColor: '#0F7BAB',
    borderColor: '#0F7BAB',
  },
  select: {
    paddingTop: 20
  }
})