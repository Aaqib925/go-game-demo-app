import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { collection, deleteDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useFetchAllTodos } from '../views/Todos/hooks/queries';
import { useDeleteTodo, useEditTodo } from '../views/Todos/hooks/mutation';

export interface ITodo {
    completed?: boolean;
    id?: string;
    title?: string;
}

const useTodo = () => {

    const { data: allFetchedTodos, isLoading: isFetchingTodos } = useFetchAllTodos();

    const { mutate: deleteTodoAction } = useDeleteTodo()

    const { mutate: editTodoAction } = useEditTodo()

    const editTodo = useCallback(async (ref: any, done: boolean) => {
        editTodoAction({ id: ref, body: { completed: done } });
    }, [editTodoAction]);

    const deleteTodo = useCallback(async (ref: any) => {
        deleteTodoAction(ref);
    }, [deleteTodoAction]);

    return {
        todos: allFetchedTodos,
        isFetchingTodos,
        editTodo,
        deleteTodo
    }
}

export default useTodo

