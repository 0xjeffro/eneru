import mainNavStore, { IMainNavStore } from "@/store/mainNavStore";

export interface IStore {
    mainNav: IMainNavStore;
}

export default function createStore(initialState: any): () => IStore {
    return () => {
        return {
            mainNav: {...mainNavStore(), ...initialState.mainNav}
        };
    };
}
