import { useEffect, useRef } from 'react';
import logo from '../../assets/images/logo.png';
import userImg from'../../assets/images/avatar-icon.png';
import {BiMenu} from 'react-icons/bi';
import { NavLink, Link } from 'react-router-dom';

let navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Service'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
]

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}

          <div>
            <img src={logo} alt="" />
          </div>

          {/* menu */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link, index) =>(
                  <li key={index}>
                    <NavLink to={link.path} className={navClass => (navClass.isActive ? "text-greenColor text-[16px] leading-7 font-[600]" :
                        "text-primaryColor text-[16px] leading-7 font-[500]")}>
                          {link.display}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>

          {/* nav right */}
          <div className='flex items-center gap-4'> 
          <div>
            </div>
            <Link to='/'>
              <figure className='w-[35px] h-[35px] rounded-full cursor-pointer '>
                <img src={userImg} className='w-full rounded-full' alt="" />
              </figure>
            </Link>
          </div>
          <Link to='/login'>
            <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px]
            flex item-cnter justify-center rounded-[50px]'>Login</button>
          </Link>

          <span >
            <BiMenu className='w-6 h-6 cursor-pointer'/>
          </span>

        </div>
      </div>
    </header>
  );
}

export default Header;
