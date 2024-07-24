import { useMutation, useQueryClient } from "react-query"
import { Post } from "../../../../../../service/api-service";
import { TODO_QUERIES_KEYS } from "../../../../../../views/Todos/hooks/queries";

export type CreateTodoBody = {
    title: string;
}

const createTodoAction = async (body: CreateTodoBody) => {
    return Post({
        url: `/todo`,
        body
    })
}

export const useTodoCreateAction = () => {
    const queryClient = useQueryClient();
    return useMutation(({ body }: { body: CreateTodoBody }) => createTodoAction(body), {
        onSuccess: () => queryClient.invalidateQueries(TODO_QUERIES_KEYS.CREATE_TODO)
    })
}