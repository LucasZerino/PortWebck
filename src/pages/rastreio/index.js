import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import ContactCreative2 from '../../sections/contact/ContactCreative2'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from '../../components/navbar'
import Footer from '../../components/footer2'


class Index extends React.Component {

  render() {
    

    const particlesInit = async (main) => {
      console.log(main);
  
      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(main);
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };

    const { site } = this.props.data

    return (
      <div id='Cliente'>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
      <Navbar  sections={[]}/>
           <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={{
                    "particles": {
                      "number": {
                        "value": 100,
                        "density": {
                          "enable": true,
                          "value_area": 2000
                        }
                      },
                      "color": {
                        "value": ["#03afaf","#04e5e5"]
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 0,
                          "color": "#fff"
                        }
                      },
                      "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                          "enable": true,
                          "speed": 0.5,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 8.017060304327615,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 12.181158184520175,
                          "size_min": 0.1,
                          "sync": true
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": this.context.theme === "dark" ? "#fff" : "#555",
                        "opacity": 0.5,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "bounce",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": false,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": false,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 400,
                          "size": 40,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 200,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  }}
                />
          <ContactCreative2 />
          <Footer/>
      </div>
    )
  }
}

export default Index

export const personalQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`