import axios from "axios";
import { ErrorRequest } from "../Errors/Error";


const Axios = axios.create({
    baseURL: "http://localhost:3303/"
});

export interface IdataProps { 
    name: string,
    categoriaId: number,
    amount: number,
    price: number,
    moedaId?: string,
    description: string, 
    createdAt?: string,
    updatedAt?: string
    id?: number|string,
    title?: string,
}


const _get = async (path: string): Promise<IdataProps[]| ErrorRequest | undefined> => {
    try {
        const { data } = await Axios.get(path);
        return data;
    } catch (error) {
        if (error instanceof Error) return new ErrorRequest('erro ao buscar');
    }
}
const _put = () => {

}
const _post = async (path: string, obj: IdataProps) => {
    try {
        const { data } = await Axios.post(path, obj);
        return data;
    } catch (error) {
        if (error instanceof Error) return new ErrorRequest('erro ao buscar');
    }
}
const _del = () => {

}

export const request = {
    _get,
    _del,
    _post,
    _put
} 
