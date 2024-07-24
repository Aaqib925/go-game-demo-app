import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserData } from './interface/User';


export interface AuthState {
    isLoggedIn?: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    token?: string;
    setToken: (token: string) => void;
    user?: UserData,
    setUserData: (user: UserData) => void;
}

const initialState: any = {
    token: '',
    user: {} as any,
    isLoggedIn: false,

};

const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isLoggedIn: false,

            setIsLoggedIn: (isLoggedIn: boolean): void => {
                set({ isLoggedIn });
            },


            setToken: (token: string): void => {
                set({ token });
            },

            setUserData: (user: UserData): void => {
                set({ user });
            },

        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);


export default useAuthStore;
