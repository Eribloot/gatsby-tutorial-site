//import react and link
import * as React from "react";
import { Link } from "gatsby";

//declare layout to group all elements together for easy updates
const Layout = ({ pageTitle, children }) => {
  return(
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

//export component
export default Layout;