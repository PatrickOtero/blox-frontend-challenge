import { Outlet } from "react-router-dom";
import { CandidateHeader } from "../components/specialHeader";
import useLoginContext from "../hooks/Login/useLoginContext";
import { DefaultContainer } from "./default.style";

export function DefaultLayout() {

    const { loading } = useLoginContext();

    return (
       <DefaultContainer>
            {loading && (
                <div className="backdrop">
                <div className="login-loading">
                    <div className="login-loader"></div>
                </div>
                </div>
            )}
            <CandidateHeader/>
            <Outlet/>
       </DefaultContainer>
    )
}