import React from 'react';
import { PlayerProvider } from './src/services/PlayerContext';
import StackNavigation from "./src/navigation/StackNavigation.tsx";

const App = () => {
    return (
        <PlayerProvider>
            <StackNavigation />
        </PlayerProvider>
    );
};

export default App;
