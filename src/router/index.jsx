import { BrowserRouter,Routes,Route } from "react-router-dom"
import Flags from "../Flags"

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Flags/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router;