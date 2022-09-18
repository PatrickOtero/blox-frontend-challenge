import { Outlet } from "react-router-dom";
import { CandidateHeader } from "../components/Header";

export function DefaultLayout() {
    return (
       <div>
            <CandidateHeader/>
            <Outlet/>
       </div>
    )
}