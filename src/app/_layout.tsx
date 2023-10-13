import { Stack } from 'expo-router'
import React from "react";
import { ThemeProvider, DarkTheme } from '@react-navigation/native';


const Root = () => {
    return <ThemeProvider value={DarkTheme}>
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='[id]' options={{ title: 'Movie Details', animation: 'slide_from_right' }} />
        </Stack>
    </ThemeProvider>
};

export default Root;
