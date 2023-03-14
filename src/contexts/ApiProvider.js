import { createContext, useContext } from "react";
import MicroblogAPIClient from '../MicroblogAPIClient';

const ApiContext = createContext();

export default function ApiProvider({ children }) {
    const api = new MicroblogAPIClient()

    return (
        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    );
}

export function useApi() {
    return useContext(ApiContext);
}