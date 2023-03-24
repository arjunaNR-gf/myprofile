import react from 'react';
import IconBar from '../IconBar';
import { Email, Location, Mobile } from '../IconImg/Index';

import './Sidebar.css';
const SideBar=()=>{
    return(
        <>
        <div className='sidebar'>
            <span className='myprofile--pic'>
                <img src='https://files.oyebesmartest.com/uploads/preview/insta-94245zr.jpeg' alt='pic please' />
            </span>
            <IconBar icon={<Mobile color="white" />}  text="9448427178, 7019609848"/>
            <IconBar icon={<Email color="white" />}  text="arjun042896@gmail.com" />
            <IconBar icon={<Location color="white" />} text="S/O Rajashekar, Niluvani, Kendalbail(p), Thirthahalli(T),Shivamogga(D),Karnataka(s),India" />

        </div>
        

        </>
    )
}

export default SideBar;