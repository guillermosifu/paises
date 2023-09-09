import { BrowserRouter,Routes,Route } from "react-router-dom"
import Flags from "../Flags"
import Detail from "../Detail/index,"

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Flags/>}/>
        <Route path="/flags/detail/:name" element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router;