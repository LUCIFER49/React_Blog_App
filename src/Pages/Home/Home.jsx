import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import Posts from "../../Posts/Posts";
import "./home.css";

function Home(){
    return(
        <>
            <Header/>
            <div className="home">
                <Posts/>
                <Sidebar/>
            </div>
        </>
    );
}

export default Home;