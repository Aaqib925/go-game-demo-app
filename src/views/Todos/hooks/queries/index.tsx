import { useQuery } from "react-query";
import useAuthStore from "../../../../store/Auth";
import { Get } from "../../../../service/api-service";


export const TODO_QUERIES_KEYS = {
    CREATE_TODO: "CREATE_TODO",

}

const fetchAllTodosAction = async () => {
    return Get({
        url: `/todo/all`
    });
}

export const useFetchAllTodos = () => {
    return useQuery([TODO_QUERIES_KEYS.CREATE_TODO], fetchAllTodosAction)
}
