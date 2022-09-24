import { useState } from "react"
// import useListContext from "../../hooks/List/useListContext"

export const useDataHelper = () => {
    // const { storedList } = useListContext()
    const [ listFilterOptions ] = useState<string[]>([
        "Aberto para edição",
        "Aguardando revisão",
        "Aprovado",
        "Arquivados"
    ])

    // Não vi sentido em usar o filtro devido ao fato de só haver unidades curriculares com apenas um tipo de status, o status "Accepted".

    // const filterOptions = {
    //     "Aprovado": () => storedList.filter((card: any) => card.cached_blox.status === "Accepted")
    // }

    return { listFilterOptions }
}