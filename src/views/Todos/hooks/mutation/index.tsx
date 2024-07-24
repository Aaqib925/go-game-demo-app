import { useMutation, useQueryClient } from "react-query"
import { Delete, Patch, Post } from "../../../../service/api-service";
import { TODO_QUERIES_KEYS } from "../queries";
import { ITodo } from "../../../../hooks/useTodo";


const deleteTodoAction = async (id: string) => {
    return Delete({
        url: `/todo/${id}`,
    })
}

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();
    return useMutation((id: string) => deleteTodoAction(id), {
        onSuccess: () => queryClient.invalidateQueries(TODO_QUERIES_KEYS.CREATE_TODO)
    })
}


const editTodoAction = async (id: string, body: any) => {
    return Patch({
        url: `/todo/${id}`,
        body
    })
}


export const useEditTodo = () => {
    const queryClient = useQueryClient();
    return useMutation(({ id, body }: { id: string, body: ITodo }) => editTodoAction(id, body), {
        onSuccess: () => queryClient.invalidateQueries(TODO_QUERIES_KEYS.CREATE_TODO)
    })
}