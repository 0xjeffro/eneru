export interface IMainNavStore {
    key: string;
    setKey: (key: string) => void;
}


const useMainNavStore = (): IMainNavStore => {
    return {
        key: '',
        setKey: function (key: string) {
            this.key = key;
        }
    };
}

export default useMainNavStore;
