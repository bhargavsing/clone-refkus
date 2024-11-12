import React from "react"
import Navbar from "./components/navbar/Navbar"
import Open from "./components/NEWOPEN/Open"
import { Route,Routes,BrowserRouter } from "react-router-dom"

import LocomotiveScroll from "locomotive-scroll"
import Home from "./components/Home"

const App = () => {
    const locomotiveScroll = new LocomotiveScroll()

    return (
        <div className="w-full bg-zinc-900 text-white">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/hey" element={<Open/>}></Route>
                
</Routes>
            
            
           
            
            
        </BrowserRouter>
        </div>
    )
}
            
           
            

export default App