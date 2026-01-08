import { BrowserRouter, Routes,Route } from "react-router-dom"
import About from "./pages/about"
import CreateTodo from "./pages/create"

// import {view} from "./pages/view";



export default function App() {
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/view" element={<view />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <CreateTodo></CreateTodo>
      <About></About>

      {/* <DeleteTodo></DeleteTodo> */}
    </>
  );

}
