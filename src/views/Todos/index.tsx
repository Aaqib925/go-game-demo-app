import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { IAppTheme } from '../../constants/theme';
import ThemeToggler from '../../components/ThemeToggler';
import { AddTodoBottomSheetContext } from '../../providers/AddTodoBottomSheet';
import useTodo from '../../hooks/useTodo';
import TodoItemListView from './components/TodoItem';
import LogoutButton from '../../components/LogoutButton';
import { useFetchAllTodos } from './hooks/queries';
import Button from '../../components/Button';
import { hp, wp } from '../../utils/responsive';

const TodosScreen = () => {

    const { colors }: IAppTheme = useTheme();

    const navigation = useNavigation();

    const { todos, isFetchingTodos, editTodo, deleteTodo } = useTodo()


    const { openBottomSheet } = useContext(AddTodoBottomSheetContext);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <ThemeToggler />,
            headerLeft: () => <LogoutButton />,
        })
    }, [ThemeToggler]);


    const renderItem = useCallback(({ item, index }: any) => {
        return (
            <TodoItemListView
                id={item.id}
                done={item.completed}
                title={item.title}
                toggleTodoDone={editTodo}
                deleteTodo={deleteTodo}
            />
        )
    }, [editTodo, deleteTodo]);


    return (
        <View style={[styles.mainContainer, { backgroundColor: colors.background }]}>
            <Button
                onPress={openBottomSheet}
                text='Add Todo'
                type='large'
                customStyle={{ width: '99%' }}
                gradientColors={['#406BDF', '#5929DF']}
            />
            {
                isFetchingTodos ? <ActivityIndicator size='large' color={colors.text} /> : <></>
            }
            <FlatList
                data={todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}

export default TodosScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        margin: wp(5)
    }
})