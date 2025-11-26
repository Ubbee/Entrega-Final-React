import { useContext } from "react";
import { createContext } from "react";

export const miContexto = createContext();

export function useProducts() {
    return useContext(miContexto)
}