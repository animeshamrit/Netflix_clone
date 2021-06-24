import React, {useState,useEffect} from 'react'
import './nav.css';

function Nav() {

    const[show,handleshow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if(window.scrollY > 100){
                handleshow(true);
            }
            else
            handleshow(false);
        });
        return () => {
            window.addEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="netflix-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
            alt="NETFLIX"
            />
            <img className="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6R37BuiPQhM2eYqTcsokPUfbY45BbYgeyQ&usqp=CAU"
            alt="NETFLIX"
            />
        </div>
    )
}

export default Nav
