export interface User {
    name: string;
    _id: string;
    age: number
}

export interface token {
    message: string;
    user: {
        username: string;
        email: string,
        created_at: string
    },
    token: string
}