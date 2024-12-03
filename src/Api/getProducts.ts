import { QueryFunction, UseQueryResult, useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

export interface IData {
    id: number;
    brand: string;
    description: string;
    title?: string;
    images: string[];
    price: number;
    stock: number;
    category: string;
    amount: number
}
interface IRes {
    products: IData[];
}

const getProducts: QueryFunction<IData[]> = async ({ queryKey }) => {
    const skip = queryKey[1];
    const response: IRes = await axiosClient.get(`?limit=12&skip=${skip}`);
    return response.products;
};

export const getData = function (skip: number): UseQueryResult<IData[], Error> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({ queryKey: ["products", skip], queryFn: getProducts });
};
