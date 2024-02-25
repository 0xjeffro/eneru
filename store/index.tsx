import React, {createContext, ReactElement} from "react";
import {useLocalObservable, enableStaticRendering} from "mobx-react-lite";
import createStore, {IStore} from "@/store/rootStore";

interface IProps {
    initialValue: Record<any, any>
    children: ReactElement
}

enableStaticRendering(true)

const storeContext = createContext({});
export const useStoreProvider = ({initialValue, children}: IProps) => {
    const store: IStore = useLocalObservable(createStore(initialValue))
    return (
        <storeContext.Provider value={store}>
            {children}
        </storeContext.Provider>
    )
}

export const useStore = () => {
    const store:IStore =  React.useContext(storeContext) as IStore
    if (!store) {
        throw new Error('Data not found.')
    }
    return store
}
