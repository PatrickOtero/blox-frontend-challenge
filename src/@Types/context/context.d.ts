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
    loginMessages: string;
    setLoginMessages: React.Dispatch<React.SetStateAction<string>>;

    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IListContext {
    handleGetListData: () => Promise<void>;
    handleGetCompleteList: () => Promise<void>;
    completeListData: any;
    setCompleteListData: React.Dispatch<React.SetStateAction<any>>;
    listData: any;
    setListData: React.Dispatch<React.SetStateAction<any>>;
    responsibles: any;
    setResponsibles: React.Dispatch<React.SetStateAction<any>>;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    inputFilters: string | undefined;
    setInputFilters: React.Dispatch<React.SetStateAction<string>>;
    searchInput: string | undefined;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
    isFirstPage: boolean;
    isLastPage: boolean;
}

export interface IRegisterMessages {
    success?: string;

    cpf?: string[];
    email?: string[];
    password?: string[];
    password_confirmation?: string[];
    fields?: string | undefined;
}

export interface IRegisterContext {
    handleUserRegister: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    registerName: string | undefined;
    setRegisterName: React.Dispatch<React.SetStateAction<string>>;
    registerCpf: string | undefined;
    setRegisterCpf: React.Dispatch<React.SetStateAction<string>>;
    registerDate: string | undefined;
    setRegisterDate: React.Dispatch<React.SetStateAction<string>>;
    registerEmail: string | undefined;
    setRegisterEmail: React.Dispatch<React.SetStateAction<string>>;
    registerPass: string | undefined;
    setRegisterPass: React.Dispatch<React.SetStateAction<string>>;
    registerConfirmPass: string | undefined;
    setRegisterConfirmPass: React.Dispatch<React.SetStateAction<string>>;
    registerMessage: IRegisterMessages;
    setRegisterMessage: React.Dispatch<React.SetStateAction<IRegisterMessages>>;
}