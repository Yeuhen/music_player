import React from 'react';
import './Sidebar.css';
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'

const Sidebar = ({showAside}) => {
    return (
        <aside className={showAside ? 'aside-show aside' : 'aside'} >

            <Logo/>
            <Menu menu={[
                {text: 'Main', link: '#', submenu: false},
                {text: 'Intresting', link: '#', submenu: true},
                {text: 'Favourite', link: '#', submenu: true},
            ]}/>
        </aside>
    )
};

export default Sidebar;