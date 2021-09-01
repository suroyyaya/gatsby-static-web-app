import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./animation.css"
import recipeGif from "../static/gifs/still-dolphin.gif"
import recipeGif2 from "../static/gifs/still-dolphin.gif?t=1587914555745"
import recipeDolphin from "../static/gifs/dolphin.gif"
import recipePlay from "../static/gifs/play.gif"
class animation extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  toggleOk() {
    document.getElementById("nyancat.gif").style.display = "none"
    document.getElementById("still-nyancat.gif").style.display = "block"
  }

  toggleOk2() {
    document.getElementById("still-nyancat.gif").style.display = "none"
    document.getElementById("nyancat.gif").style.display = "block"
  }

  render() {
    const backgroundUrl = "../static/gifs/still-nyancat.gif"
    return (
      <Layout>
        <Seo title="Page Animation" />
        <p className="test">Welcome to page animation</p>

        <div className="interactive-gif ">
          <div
            className="embedded"
            style={{ paddingTop: "56.28517823639775%" }}
          >
            <div
              id="nyancat.gif"
              className="gif-container"
              style={{ display: "block" }}
              onClick={() => this.toggleOk()}
            >
              <img
                id="image-nyancat.gif"
                className="gif"
                src={recipeGif2}
                data-origina={recipeGif}
              />
            </div>

            <div
              id="still-nyancat.gif"
              className="still-container"
              onClick={() => this.toggleOk2()}
              style={{ display: "none" }}
            >
              <img
                id="image-still-nyancat.gif"
                className="still"
                src={recipeDolphin}
              />
              <img className="play" src={recipePlay} />
            </div>
          </div>
          <div className="caption">Nyanyanyanyanyanyanya</div>
        </div>

        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default animation
