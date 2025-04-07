import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../styles';

const PlaylistsScreen = ({ navigation }: any) => {
    const playlists = ['Playlist 1', 'Playlist 2', 'Playlist 3']; // Мокові дані для плейлистів

    const renderPlaylist = (playlist: string) => (
        <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => navigation.navigate('Player')}>
            <Text style={globalStyles.title}>{playlist}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Playlists</Text>
            {playlists.map((playlist, index) => (
                <View key={index}>{renderPlaylist(playlist)}</View>
            ))}
        </View>
    );
};

export default PlaylistsScreen;
