import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { APP_ROUTES, AuthStackParamList } from '../../Routes';
import TodosScreen from '../../../views/Todos';
import RegisterScreen from '../../../views/Register';
import LoginScreen from '../../../views/Login';


const AuthStackNavigator = createStackNavigator<AuthStackParamList>();

interface IAppStackScreen {
    name: string;
    component: React.FC;
}

const AppStackScreens: IAppStackScreen[] = [
    {
        name: APP_ROUTES.AUTH.LOGIN,
        component: LoginScreen,
    }
    ,
    {
        name: APP_ROUTES.AUTH.REGISTER,
        component: RegisterScreen,
    }
]


const AuthStack = () => {
    return (
        <AuthStackNavigator.Navigator
            initialRouteName={APP_ROUTES.AUTH.LOGIN as keyof AuthStackParamList | undefined}
        // screenOptions={{
        //     headerShown: false,
        // }}
        >
            {AppStackScreens.map(({ name, component }) => {
                return (
                    <AuthStackNavigator.Screen
                        key={name}
                        name={name as keyof AuthStackParamList}
                        component={component}
                    />
                )
            })}
        </AuthStackNavigator.Navigator>
    )
}

export default AuthStack
