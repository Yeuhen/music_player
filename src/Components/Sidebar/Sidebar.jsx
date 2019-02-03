import React from 'react';
import './Sidebar.css';
import Menu from '../Menu/Menu'

const Sidebar = ({showAside}) => {
    return (
        <aside className={showAside ? 'aside-show aside' : 'aside'} >
            <Menu menu={[
                {text: 'Main', link: '#', submenu: false},
                {text: 'Intresting', link: '#', submenu: true},
                {text: 'Favourite', link: '#', submenu: true},
            ]}/>
        </aside>
    )
};

export default Sidebar;