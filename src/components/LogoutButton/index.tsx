import { Image, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useCallback } from 'react'
import { useTheme } from '@react-navigation/native'
import { IAppTheme } from '../../constants/theme';
import useUserThemeStore, { UserTheme } from '../../store/theme';
import { APP_IMAGES } from '../../assets/images';
import { APP_COLORS } from '../../constants/colors';
import { wp } from '../../utils/responsive';
import useAuthStore from '../../store/Auth';

const LogoutButton = ({ }: any) => {

    const { colors }: IAppTheme = useTheme();

    const setIsLoggedIn = useAuthStore(state => state.setIsLoggedIn);
    const setToken = useAuthStore(state => state.setToken);


    const handleOnPressLogout = useCallback(() => {
        setIsLoggedIn(false);
        setToken('');
    }, [setIsLoggedIn, setToken]);


    return (
        <TouchableOpacity onPress={handleOnPressLogout} style={styles.container}>
            <Text style={{ color: colors.text }}>Logout</Text>
        </TouchableOpacity>
    )
}

export default LogoutButton

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    container: {
        marginLeft: wp(5),
    }
})