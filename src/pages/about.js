//import react and link
import * as React from "react";
import { Link } from "gatsby";

//component definition
const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>Hi there!</h1>
      <Link to="/">Back to Home</Link>
      <p>I'm the creator of this little website. It's built with Gatsby!</p>
    </main>
  )
}

// export page component
export default AboutPage;
