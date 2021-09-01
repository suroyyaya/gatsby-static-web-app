import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video"
const PageVideo = () => (
  <Layout>
    <SEO title="Example video" />
    <section>
      <h1>video</h1>
      <p>You just hit a page that doesn't exist... the sadness.</p>
      <p>May I suggest a video instead?</p>
      <Video
        videoSrcURL="https://www.youtube.com/embed/JvJKQqYE6hc"
        videoTitle="Ookbee EBook"
      />
      <Link to="/">Go back to the homepage</Link>
    </section>
  </Layout>
)
export default PageVideo