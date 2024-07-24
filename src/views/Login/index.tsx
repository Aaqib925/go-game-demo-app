import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Controller, useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { IAppTheme } from '../../constants/theme';
import ThemeToggler from '../../components/ThemeToggler';
import Input from '../../components/Input';
import { hp, wp } from '../../utils/responsive';
import { APP_IMAGES } from '../../assets/images';
import Button from '../../components/Button';
import { APP_ROUTES } from '../../navigation/Routes';

interface LoginFormInputs {
    email: string,
    password: string
}

const schema = yup.object({
    email: yup.string().required("Email is required").min(2, "Email should be of 2 or more characters"),
    password: yup.string().required("Password  is required").min(2, "Password name must of be 2 or more characters"),
}).required();


const LoginScreen = () => {

    const { colors }: IAppTheme = useTheme();

    const navigation = useNavigation<any>();

    const { control, handleSubmit, formState: { isValid, dirtyFields }, watch, setError, clearErrors } = useForm<LoginFormInputs>({
        resolver: yupResolver(schema),
        criteriaMode: 'all',
        defaultValues: {
            email: '',
            password: ''
        }
    });

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <ThemeToggler />,
        })
    }, [ThemeToggler]);

    const onSubmit = useCallback((data: LoginFormInputs): void => {
        console.log("data", data)
    }, [])

    const onRegisterPress = useCallback(() => {
        navigation.navigate(APP_ROUTES.AUTH.REGISTER)
    }, [])

    return (
        <View style={[styles.mainContainer, { backgroundColor: colors.background }]}>
            <View style={styles.upperContainer}>
                <Image source={APP_IMAGES.goGameLogo} resizeMode='cover' />
            </View>
            <View style={styles.bottomContainer}>
                <Controller
                    control={control}
                    render={({ field, fieldState, formState }) => {
                        return (
                            <Input
                                placeholder='Enter Email'
                                hideHeading={true}
                                onChangeValue={(props) => {
                                    clearErrors('email');
                                    field.onChange(props)
                                }}
                                onBlurred={field.onBlur}
                                value={field.value}
                                errorMessage={fieldState.error?.message}
                                autoFocus={true}
                                textInputProps={{ autoCapitalize: 'none', keyboardType: 'email-address' }}
                            />
                        )
                    }}
                    name="email"
                    defaultValue={""}
                />
                <Controller
                    control={control}
                    render={({ field, fieldState, formState }) => {
                        return (
                            <Input
                                placeholder='Enter Password'
                                hideHeading={true}
                                onChangeValue={(props) => {
                                    clearErrors('email');
                                    field.onChange(props)
                                }}
                                onBlurred={field.onBlur}
                                value={field.value}
                                errorMessage={fieldState.error?.message}
                                containerStyles={{ marginTop: wp(20) }}
                                textInputProps={{ autoCapitalize: 'none', secureTextEntry: true }}
                            />
                        )
                    }}
                    name="password"
                    defaultValue={""}
                />
                <Button
                    disabled={!isValid}
                    gradientColors={['#406BDF', '#5929DF']}
                    mainContainerStyle={styles.buttonStyle}
                    onPress={handleSubmit(onSubmit)}
                    text={'Login'}
                    type={'large'}
                />
                <TouchableOpacity onPress={onRegisterPress}>
                    <Text style={[styles.registerText, { color: colors.text }]}>Register New Account</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    mainHeading: {
        fontSize: wp(30),
        fontWeight: 'bold'
    },
    upperContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        flex: 2,
        paddingHorizontal: wp(20)
    },
    buttonStyle: {
        marginTop: hp(20),
        width: '100%'
    },
    registerText: {
        textAlign: 'center',
        marginTop: hp(20),
        textDecorationLine: 'underline'
    }
})