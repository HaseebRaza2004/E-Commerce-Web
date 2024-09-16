import { Outlet } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";


function Dashboard() {

    return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
    )
  }
  
  export default Dashboard;