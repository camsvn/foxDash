import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { SidebarData } from '../../globals/constants/sidebarData';

import styled from 'styled-components';
import './Sidebar.scss';


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <nav className={'nav-menu active'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
    )
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
  font: 
`;

const CardContainer = styled.div.attrs((props: any) => ({
    width: props.width || "90px",
    height: props.height || "150px",
    background: props.background || null
}))`
    background: palevioletred;
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: 10px;
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
`;

export default Sidebar;
