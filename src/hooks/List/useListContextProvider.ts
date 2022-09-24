import { useState } from "react"
import { useLocalStorage } from "react-use";
import { apiAuth } from "../../services/axios"

const useListContextProvider = () => {
    const [ listData, setListData ] = useState<any>()
    const [ storedList, setStoredList ] = useLocalStorage<any>("StoredListData", "");
    const [ responsibles, setResponsibles ] = useState<any>()
    const [ page, setPage ] = useState<any>(1);

    const isFirstPage = page === 1 ? true : false;
    const isLastPage = page === 15 ? true : false;
    
    const [ inputFilters, setInputFilters ] = useState<any>()

    const handleStoreListData = async () => {
      try {
        const response = await apiAuth.get(`/v1/public/institutions/22/blox_offerings`)

        setStoredList(response.data)

    } catch (error: any) {
        console.log(error.response.data)
    }
    }

    const handleGetListData = async() => {
        try {
            const response = await apiAuth.get(`/v1/public/institutions/22/blox_offerings?page=${page}&per=5`)

            setListData(response.data)

            console.log(response.data)

            for (let item of response.data) {
              setResponsibles(item.cached_blox.responsible)
            }

        } catch (error: any) {
            console.log(error.response.data)
        }
    }

  return {
    handleGetListData,
    listData,
    setListData,
    responsibles,
    setResponsibles,
    page,
    setPage,
    inputFilters,
    setInputFilters,
    isFirstPage,
    isLastPage,
    handleStoreListData,
    storedList,
    setStoredList
  }
}

export default useListContextProvider