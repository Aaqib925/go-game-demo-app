import { Image, StyleSheet, Text, View } from 'react-native'
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
import { TouchableOpacity } from 'react-native';
import { APP_ROUTES } from '../../navigation/Routes';
import { useRegisterUser } from './hooks/mutation';
import useAuthStore from '../../store/Auth';

interface RegisterFormInputs {
    name: string,
    email: string,
    password: string
}

const schema = yup.object({
    name: yup.string().required("Name is required").min(2, "Name should be of 2 or more characters"),
    email: yup.string().required("Email is required").min(2, "Email should be of 2 or more characters"),
    password: yup.string().required("Password  is required").min(2, "Password name must of be 2 or more characters"),
}).required();


const RegisterScreen = () => {

    const { colors }: IAppTheme = useTheme();

    const navigation = useNavigation<any>();

    const setIsLoggedIn = useAuthStore(state => state.setIsLoggedIn);
    const setToken = useAuthStore(state => state.setToken);

    const { mutateAsync: registerUserAction, isLoading: loadingRegisterUser } = useRegisterUser()
    const { control, handleSubmit, formState: { isValid, dirtyFields }, watch, setError, clearErrors } = useForm<RegisterFormInputs>({
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

    const onSubmit = useCallback(async ({ email, name, password }: RegisterFormInputs) => {
        try {
            const { token } = await registerUserAction({ body: { email, password, name } });
            if (token) {
                setToken(token);
                setIsLoggedIn(true);
            }
        }
        catch (error: any) {
            const { message } = error;
            setError('email', { type: 'manual', message });
        }
    }, [setToken, setIsLoggedIn, registerUserAction])

    const onLoginPress = useCallback(() => {
        navigation.navigate(APP_ROUTES.AUTH.LOGIN)
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
                                placeholder='Enter Name'
                                hideHeading={true}
                                onChangeValue={(props) => {
                                    clearErrors('email');
                                    field.onChange(props)
                                }}
                                onBlurred={field.onBlur}
                                value={field.value}
                                errorMessage={fieldState.error?.message}
                                autoFocus={true}
                                textInputProps={{ autoCapitalize: 'none', keyboardType: 'name-phone-pad' }}
                            />
                        )
                    }}
                    name="name"
                    defaultValue={""}
                />
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
                                containerStyles={{ marginTop: wp(20) }}
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
                    text={'Register'}
                    type={'large'}
                    loading={loadingRegisterUser}
                />
                <TouchableOpacity onPress={onLoginPress}>
                    <Text style={[styles.loginText, { color: colors.text }]}>Login Your Account</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default RegisterScreen

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
    loginText: {
        textAlign: 'center',
        marginTop: hp(20),
        textDecorationLine: 'underline'
    }
})