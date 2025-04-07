import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AllScreen from '../screens/AllScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import PlayerScreen from '../screens/PlayerScreen';
import ArtistsScreen from '../screens/ArtistsScreen';
import PlaylistsScreen from '../screens/PlaylistsScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="All">
                <Stack.Screen name="All" component={AllScreen} />
                <Stack.Screen name="Albums" component={AlbumsScreen} />
                <Stack.Screen name="Player" component={PlayerScreen} />
                <Stack.Screen name="Artists" component={ArtistsScreen} />
                <Stack.Screen name="Playlists" component={PlaylistsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;
