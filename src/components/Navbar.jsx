import React from 'react';
import {Login} from "./Login";

export const Navbar = () => {
    return (
        <div>
            <input type="text" placeholder='enter name'/>
            <input type="submit" value="submit"/>
            <Login />
        </div>
    )
}

export default Navbar;