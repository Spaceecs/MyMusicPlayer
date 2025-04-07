import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { songsData } from '../data/songs';
import globalStyles from '../styles';

const ArtistsScreen = ({ navigation }: any) => {
    const artists = Array.from(new Set(songsData.map((song) => song.artist)));

    const renderArtist = (artist: string) => (
        <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => navigation.navigate('Player')}>
            <Text style={globalStyles.title}>{artist}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Artists</Text>
            {artists.map((artist, index) => (
                <View key={index}>{renderArtist(artist)}</View>
            ))}
        </View>
    );
};

export default ArtistsScreen;
