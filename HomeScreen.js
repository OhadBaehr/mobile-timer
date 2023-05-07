import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react'
import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import { StartButton } from './StartButton'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function HomeScreen({ navigation }) {
    return (
        <>
            <View style={styles.container}>
                <Text>{`להתחברות לאפליקציית טיימר אנא הזינו את מספר הטלפון והמייל שלכם`}</Text>
                <TextInput style={styles.input} placeholder='הקלד אימייל' />
                <TextInput style={styles.input} placeholder='הקלד מספר' />
                <StatusBar style="auto" />
                <View style={styles.startbar}>
                    <StartButton />
                    <View style={{ marginLeft: "auto", paddingTop: 20 }}>
                        <Text>
                            {`צריך עזרה?`}
                        </Text>
                        <Text style={{ color: "blue" }}>
                            {`יצירת קשר עם תמיכה`}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    startbar: {
        flexDirection: "row",
        padding: 40,
        marginBottom: "100px",
        maxWidth: "500px",
        marginTop: "auto",
        width: "100%",
    },
    input: {
        border: "1px solid black",
        borderRadius: 3,
        padding: "10px",
        textAlign: "right"
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        gap: 10,
        paddingTop: 150
    },
});
