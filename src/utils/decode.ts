import { jwtDecode } from "jwt-decode";



export const TokenDecoder = (Token: string ) => {
    return jwtDecode(Token);
}