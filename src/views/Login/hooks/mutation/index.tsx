import { useMutation } from "react-query"
import { Post } from "../../../../service/api-service"

export type LoginUserBody = {
    email: string;
    password: string;
}

const loginUserAction = async (body: LoginUserBody) => {
    return Post({
        url: `/auth/login`,
        body
    })
}

export const useLoginUser = () => {
    return useMutation(({ body }: { body: LoginUserBody }) => loginUserAction(body))
}