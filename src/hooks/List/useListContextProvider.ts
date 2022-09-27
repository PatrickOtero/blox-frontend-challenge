import { useState } from "react"
import { apiAuth } from "../../services/axios"
import useLoginContext from "../Login/useLoginContext"

const useListContextProvider = () => {
    const [ listData, setListData ] = useState<any>()
    const [ completeListData, setCompleteListData ] = useState<any>()
    const [ responsibles, setResponsibles ] = useState<any>()
    const [ page, setPage ] = useState<number>(1);

    const [ inputFilters, setInputFilters ] = useState<string>("")
    const [ searchInput, setSearchInput ] = useState<string>("")

    const { setLoading } = useLoginContext();

    const isFirstPage = page === 1 ? true : false;
    const isLastPage = page === 15 ? true : false;

    const handleGetCompleteList = async() => {
      setLoading(true);
      try {
          const response = await apiAuth.get(`/v1/public/institutions/22/blox_offerings`)

          setCompleteListData(response.data)

          console.log(response.data)

          for (let item of response.data) {
            setResponsibles(item.cached_blox.responsible)
          }

          setLoading(false)
      } catch (error: any) {
          console.log(error.response.data)
          setLoading(false)
      }      
    }

    const handleGetListData = async() => {
      setLoading(true);
        try {
            const response = await apiAuth.get(`/v1/public/institutions/22/blox_offerings?page=${page}&per=5`)

            setListData(response.data)

            console.log(response.data)

            for (let item of response.data) {
              setResponsibles(item.cached_blox.responsible)
            }

            setLoading(false)
        } catch (error: any) {
            console.log(error.response.data)
            setLoading(false)
        }
    }

  return {
    handleGetListData,
    handleGetCompleteList,
    completeListData,
    setCompleteListData,
    listData,
    setListData,
    responsibles,
    setResponsibles,
    page,
    setPage,
    inputFilters,
    setInputFilters,
    searchInput,
    setSearchInput,
    isFirstPage,
    isLastPage,
  }
}

export default useListContextProvider