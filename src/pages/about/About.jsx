import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, similique exercitationem! Harum blanditiis laudantium asperiores quaerat? Ipsum laborum officia tempora!
      </Header>
      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magni perspiciatis laboriosam distinctio sed qui vel expedita architecto ad laborum accusantium fuga recusandae cupiditate dolorum explicabo at neque? Labore, ratione.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi libero, obcaecati repellat non necessitatibus nulla totam deserunt veniam molestias aut at fugit provident similique.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni non ipsum illum impedit quod deserunt quos consequuntur quis aliquid?
            </p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magni perspiciatis laboriosam distinctio sed qui vel expedita architecto ad laborum accusantium fuga recusandae cupiditate dolorum explicabo at neque? Labore, ratione.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi libero, obcaecati repellat non necessitatibus nulla totam deserunt veniam molestias aut at fugit provident similique.
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magni perspiciatis laboriosam distinctio sed qui vel expedita architecto ad laborum accusantium fuga recusandae cupiditate dolorum explicabo at neque? Labore, ratione.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi libero, obcaecati repellat non necessitatibus nulla totam deserunt veniam molestias aut at fugit provident similique.
            </p>
           
          </div>
        </div>
      </section>
    </>
  )
}

export default About