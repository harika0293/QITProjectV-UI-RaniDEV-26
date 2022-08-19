import { StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Layout, Text, Icon } from '@ui-kitten/components';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import moment from 'moment';

const Analytics = () => {
    const [date, setDate] = useState(new Date(Date.now()));//current date code
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };
    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true
        })
    };
    const showDatepicker = () => {
        showMode('date');
    };
    const users = [
        {
            index: "1",
            name: "Number of Cough",
            image: require("../../assets/cough.png"),
            steps: "00",
        },
        {
            index: "2",
            name: "Number of Walking",
            image: require("../../assets/walking.png"),
            steps: "00",
        },
        {
            index: "3",
            name: "Number of Time Drinking",
            image: require("../../assets/glass.png"),
            steps: "00",
        },
        {
            index: "4",
            name: "Number of Time Sleeping",
            image: require("../../assets/falling.png"),
            steps: "00",
        },
    ];
    return (
        <Layout style={styles.Container}>
            <Layout style={styles.mainHead}>
                <Layout style={styles.mainHeader}>
                    <Text style={{ fontSize: 25, fontFamily: "Recoleta-Bold" }}>
                        Daily<Text style={{ color: "#0075A9", fontSize: 25, fontFamily: "Recoleta-Bold" }}> Analytics</Text>
                    </Text>
                    <Text style={{ fontFamily: "GTWalsheimPro-Regular", fontSize: 17, color: "#C5C5C5" }}> View your daily analysis on a daily basis</Text>
                </Layout>
                <Layout style={styles.Calender}>
                    <Text style={{ fontSize: 25, fontFamily: "Recoleta-Bold" }}>
                        Selected<Text style={{ color: "#0075A9", fontSize: 25, fontFamily: "Recoleta-Bold" }}> Date </Text>
                    </Text>
                    <TouchableOpacity style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => showDatepicker()}>
                        <Text style={{ color: "#C1C1C1", fontSize: 18, fontFamily: "Recoleta-Bold" }}>: {moment(date).format('DD-MM-YYYY')}</Text>
                        <Icon
                            style={styles.icon2}
                            fill='#0075A9'
                            name='calendar' />
                    </TouchableOpacity>
                </Layout>
                <FlatList
                style={styles.textStyle}
                keyExtractor={(key) => {
                    return key.index;
                }}
                data={users}
                renderItem={({ item }) => {
                    return (
                        <>
                            <Layout style={styles.card}>
                                <Image source={item.image} resizeMode="contain" />
                                <Text style={styles.text}>{item.name}</Text>
                                <Text style={styles.step}>{item.steps}</Text>
                            </Layout>
                        </>
                    );
                }}
            />
                
            </Layout>
        </Layout>
    )
}

export default Analytics

const styles = StyleSheet.create({
    Container: {
        height: '100%',
    },
    mainHead: {
        marginHorizontal: 30
    },
    mainHeader: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
    },
    text: {
        color: "#D7D7D7",
        marginTop: 10,
        alignItems: "center",
    },
    Calender: {
        display: "flex",
        flexDirection: "row",
        marginTop: 30,
    },
    card: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#EEF5F9",
        width: "100%",
        marginTop: 15,
        padding: 15,
        paddingBottom: 30,
    },
    image: {
        height: 100,
        width: 100

    },
    text: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 18,
        color: "grey",
        fontWeight: "bold"
    },
    step: {
        position: "absolute",
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 20,
        left: 100,
        top: 30,
        color: "#0075A9",
    },
    icon2: {
        width: 30,
        height: 25,
        left: 20
    }
})