import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { songsData } from '../data/songs';
import globalStyles from '../styles';

const AlbumsScreen = ({ navigation }: any) => {
    const albums = Array.from(new Set(songsData.map((song) => song.album)));

    const renderAlbum = (album: string) => (
        <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => navigation.navigate('Player')}>
            <Text style={globalStyles.title}>{album}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Albums</Text>
            {albums.map((album, index) => (
                <View key={index}>{renderAlbum(album)}</View>
            ))}
        </View>
    );
};

export default AlbumsScreen;
