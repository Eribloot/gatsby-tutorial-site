// Import React and Link
import * as React from "react";
import Layout from "../components/layout.js";

//import image plugin
import { StaticImage } from "gatsby-plugin-image";

//Define Component
const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <p>I'm constructing this website following the Gatsby tutorial.</p>
      <StaticImage
        alt="A graphic of a web application."
        src="../images/guiGraphic.png"
      />
    </Layout>
  )
}

// export component

export default IndexPage;