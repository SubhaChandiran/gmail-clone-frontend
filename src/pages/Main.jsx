import { useState } from 'react';
import Header from '../component/Header'
import SideBar from '../component/SideBar';
import Emails from '../component/Emails';

const Main = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }

    return (
        <>
            <div>
                <Header toggleDrawer={toggleDrawer} />
                <SideBar openDrawer={openDrawer} />
                <Emails openDrawer={ openDrawer } />
            </div>
        </>
    )
}

export default Main;