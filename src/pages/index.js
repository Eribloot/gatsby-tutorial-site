// Import React and Link
import * as React from "react";
import { Link } from "gatsby";

//Define Component
const IndexPage = () => {
  return( 
    <main>
      <title>Landing Page</title>
      <h1>Welcome to my Gatsby website! </h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

// export component

export default IndexPage;