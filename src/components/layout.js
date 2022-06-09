//import react and link
import * as React from "react";
import { Link } from "gatsby";

//import css
import { container, heading, navLinks, navLinkItem, navLinkText } from "./layout.module.css"

//declare layout to group all elements together for easy updates
const Layout = ({ pageTitle, children }) => {
  return(
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className ={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

//export component
export default Layout;