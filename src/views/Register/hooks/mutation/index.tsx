import { useMutation } from "react-query"
import { Post } from "../../../../service/api-service"

export type RegisterUserBody = {
    name: string;
    email: string;
    password: string;
}

const registerUserAction = async (body: RegisterUserBody) => {
    return Post({
        url: `/auth/signup`,
        body
    })
}

export const useRegisterUser = () => {
    return useMutation(({ body }: { body: RegisterUserBody }) => registerUserAction(body))
}