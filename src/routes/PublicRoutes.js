
import React from 'react';
import { Route, Routes } from "react-router-dom";
import GetUsers from '../component/GetUsers';
import GpForm from '../component/Form';
import BasicExample from '../component/UserDropD';
import DiffDate from '../component/DiffDate';
import AllUsers from '../component/AllUsers';


const PublicRoutes=()=>{
    return(
			<Routes>  
				<Route path="/" element={<GetUsers/>}/>
				<Route path="/form" element={<GpForm/>}/>
				<Route path="/userselect" element={<BasicExample/>}/>
				<Route path="/diffdate" element={<DiffDate/>}/>
				<Route path="/allusers" element={<AllUsers/>}/>
			</Routes>
    )
}

export default PublicRoutes;