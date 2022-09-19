import { Outlet } from "react-router-dom";
import { CandidateHeader } from "../components/specialHeader";

export function DefaultLayout() {
    return (
       <div>
            <CandidateHeader/>
            <Outlet/>
       </div>
    )
}