import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlayerScreen = ({ navigation }: any) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <View style={styles.container}>
            {/* Заголовок */}
            <Text style={styles.title}>Now Playing</Text>

            {/* Мокові дані для пісні */}
            <Text style={styles.songTitle}>Song Title</Text>
            <Text style={styles.artist}>Artist Name</Text>

            {/* Кнопка Play/Pause */}
            <TouchableOpacity onPress={handlePlayPause} style={styles.button}>
                <Icon
                    name={isPlaying ? 'pause-circle' : 'play-circle'}
                    size={64}
                    color="#1DB954"
                />
            </TouchableOpacity>

            {/* Кнопки перемотки вперед/назад */}
            <View style={styles.controls}>
                <TouchableOpacity onPress={() => {}}>
                    <Icon name="play-skip-back" size={32} color="#1DB954" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                    <Icon name="play-skip-forward" size={32} color="#1DB954" />
                </TouchableOpacity>
            </View>

            {/* Кнопка закриття плеєра */}
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 24,
        color: '#FFF',
        marginBottom: 20,
    },
    songTitle: {
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 18,
        color: '#B3B3B3',
        marginBottom: 30,
    },
    button: {
        marginBottom: 30,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: 50,
    },
    closeButton: {
        backgroundColor: '#1DB954',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    closeText: {
        fontSize: 18,
        color: '#FFF',
    },
});

export default PlayerScreen;
