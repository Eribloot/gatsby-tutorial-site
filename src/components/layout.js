//import react and link
import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

//import css
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle } from "./layout.module.css"

//declare layout to group all elements together for easy updates
const Layout = ({ pageTitle, children }) => {

  //metadata query via graphql
  const metadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return(
    <div className={container}>
      <title>{pageTitle} | {metadata.site.siteMetadata.title}</title>
      <header className={siteTitle}>{metadata.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>Blog</Link>
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