export const color = {
    primary: "#0A6847",
    secondary: "#F6E9B2"
};

import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    btnprimary:{
        backgroundColor:"red",
        padding:10

    }
    ,
    text: {
        fontSize: 16,
        color: color.primary,
    },
    // Add more global styles here
});