import { Link, Outlet } from "react-router-dom";
import React, { Fragment } from "react";

import {ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss';

// need a parent container to wrap what we want to render as a component Navigator

// create a component with a svg file using import {ReactComponent as _name_} from "directory"
const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">

            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
            
            
            <div className="nav-links-container">
                <Link className="nav-link" to='shop'>
                    SHOP
                </Link>
                <Link className="nav-link" to='sign-in'>
                    Sign In
                </Link>
                
            </div>
          
        </div>
        <Outlet />

      </Fragment>
    );
  };

export default Navigation

