import { Outlet } from "react-router-dom"
import Nav from "../Components/Nav"
// import Pagination from "../Components/Pagination"

const HomeLayout = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>

    </div>
  )
}

export default HomeLayout