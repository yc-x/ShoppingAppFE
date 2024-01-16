export interface LoginResponse {
    username: string,
    message: string,
    token: string,
    id: number,
    permissions: string[]
}
