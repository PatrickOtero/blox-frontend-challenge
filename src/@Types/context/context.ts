import { ReactNode } from "react"

export type ICompProps = {
    children: ReactNode;
  };  

export interface ILoginContext {
    handleUserLogin: () => Promise<void>;
    token: string | undefined;
    setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
    removeToken: () => void;
    loggedName: string | undefined;
    setLoggedName: React.Dispatch<React.SetStateAction<string | undefined>>;
    removeLoggedName: () => void;
    userName: string | undefined;
    setUserName: React.Dispatch<React.SetStateAction<string | undefined>>;
    userPass: string | undefined;
    setUserPass: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface IListContext {
    handleGetListData: () => Promise<void>;
    listData: any;
    setListData: React.Dispatch<React.SetStateAction<any>>;
    handleStoreListData: () => Promise<void>;
    storedList: any;
    setStoredList: React.Dispatch<React.SetStateAction<any>>;
    responsibles: any;
    setResponsibles: React.Dispatch<React.SetStateAction<any>>;
    page: any;
    setPage: React.Dispatch<React.SetStateAction<any>>;
    inputFilters: any;
    setInputFilters: React.Dispatch<React.SetStateAction<any>>;
    isFirstPage: boolean;
    isLastPage: boolean;
}

export interface IRegisterContext {
    handleUserRegister: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    registerName: any;
    setRegisterName: React.Dispatch<React.SetStateAction<any>>;
    registerCpf: any;
    setRegisterCpf: React.Dispatch<React.SetStateAction<any>>;
    registerDate: any;
    setRegisterDate: React.Dispatch<React.SetStateAction<any>>;
    registerEmail: any;
    setRegisterEmail: React.Dispatch<React.SetStateAction<any>>;
    registerPass: any;
    setRegisterPass: React.Dispatch<React.SetStateAction<any>>;
    registerConfirmPass: any;
    setRegisterConfirmPass: React.Dispatch<React.SetStateAction<any>>;
    registerMessage: any;
}