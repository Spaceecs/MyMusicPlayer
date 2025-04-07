import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { songsData } from '../data/songs';
import globalStyles from '../styles';

const AllScreen = ({ navigation }: any) => {
    const renderSong = ({ item }: any) => (
        <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => navigation.navigate('Player')}>
            <Text style={globalStyles.title}>{item.title}</Text>
            <Text style={globalStyles.screenTitle}>{item.artist}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>All Songs</Text>
            <FlatList
                data={songsData}
                renderItem={renderSong}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default AllScreen;
