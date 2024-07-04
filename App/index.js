// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList, View, ScrollView } from 'react-native';

const tales = [
    { id: '1', title: 'Cinderella' },
    { id: '2', title: 'Snow White' },
    { id: '3', title: 'Little Red Riding Hood' },
    { id: '4', title: 'Hansel and Gretel' },
    { id: '5', title: 'Rumpelstiltskin' },
];

const taleDetails = {
    '1': 'Cinderella Story...',
    '2': 'Snow White Story...',
    '3': 'Little Red Riding Hood Story...',
    '4': 'Hansel and Gretel Story...',
    '5': 'Rumpelstiltskin Story...',
};

const TaleList = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('TaleDetail', { taleId: item.id })}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={tales}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

const TaleDetail = ({ route }) => {
    const { taleId } = route.params;
    const taleContent = taleDetails[taleId];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.text}>{taleContent}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    list: {
        paddingHorizontal: 20,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        backgroundColor: '#f9c2ff',
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
    },
    scroll: {
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
    },
});

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TaleList">
                <Stack.Screen name="TaleList" component={TaleList} options={{ title: 'Fairy Tales' }} />
                <Stack.Screen name="TaleDetail" component={TaleDetail} options={{ title: 'Tale Detail' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}