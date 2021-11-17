import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import ListUser from "../pages/ListUser"

export default function Routing() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/ListUser" element={<ListUser />}/>
                </Routes>
            </Router>
            
        </div>
    )
}