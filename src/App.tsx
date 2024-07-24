import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer, ThemeProvider } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import AppStack from './navigation/Stacks/AppStack'
import { CUSTOM_DARK_THEME, CUSTOM_LIGHT_THEME } from './constants/theme'
import useUserThemeStore, { UserTheme } from './store/theme'
import AddTodoBottomSheetProvider from './providers/AddTodoBottomSheet'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import useAuthStore from './store/Auth'
import AuthStack from './navigation/Stacks/AuthStack'
import { QueryClientProvider } from 'react-query'
import { RNQueryClient } from './service/react-query'

const App = () => {

  const theme = useUserThemeStore(state => state.theme);

  const isLoggedIn = useAuthStore(state => state.isLoggedIn);

  console.log("isLoggedIn", isLoggedIn)

  return (
    <GestureHandlerRootView style={styles.rootView}>
      <StatusBar barStyle={theme === UserTheme.DARK ? 'light-content' : 'dark-content'} />
      <ThemeProvider value={theme === UserTheme.DARK ? CUSTOM_DARK_THEME : CUSTOM_LIGHT_THEME}>
        <SafeAreaProvider>
          <BottomSheetModalProvider>
            <NavigationContainer theme={theme === UserTheme.DARK ? CUSTOM_DARK_THEME : CUSTOM_LIGHT_THEME}>
              <QueryClientProvider client={RNQueryClient}>
                <AddTodoBottomSheetProvider>
                  {
                    isLoggedIn ? <AppStack /> : <AuthStack />
                  }
                </AddTodoBottomSheetProvider>
              </QueryClientProvider>
            </NavigationContainer>
          </BottomSheetModalProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView >
  )
}

export default App

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  }
})