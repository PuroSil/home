import React from 'react';
import './logo.css';
import { Link } from 'react-router-dom'

const Logo = ({ open }) =>
  <>
     <Link to="/">
      <span className="logo" aria-label="Logo as a link" style={{ display: open ? "none" : "block" }}>
        PETRA SILAVUORI
      </span>
    </Link>
  </>
;

export default Logo;