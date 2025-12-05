
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Components/Loading';
const Root = () => {
    const {state} =useNavigation()
    return (
        <div>
            <Navbar></Navbar>
           {state=="loading"?<Loading></Loading>: <Outlet></Outlet>}
            <Footer></Footer>
        </div>
    );
};

export default Root;