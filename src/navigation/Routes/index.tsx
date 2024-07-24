interface IAppRoutes {
    AUTH: {
        LOGIN: string;
        REGISTER: string;
    },
    USER: {
        TODOS: string;
    }
}

export const APP_ROUTES: IAppRoutes = {
    AUTH: {
        LOGIN: 'Login',
        REGISTER: 'Register',
    },
    USER: {
        TODOS: 'Todos',
    }
}

export type AuthStackParamList = {
    LOGIN: undefined;
    REGISTER: undefined;
}

export type AppStackParamList = {
    TODOS: undefined;
}