import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./pageAnimation.css"

const PageAnimation = () => (
  <Layout>
    <SEO title="Example Animation" />
    <section>
      <h1 className="red">Animation</h1>
      <Link to="/">Go back to the homepage</Link>
    </section>
  </Layout>
)
export default PageAnimation