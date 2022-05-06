import React from 'react'
import { Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import AboutPersonal from '../about/AboutPersonal'
import PortfolioTwo from '../portfolio/PortfolioTwo'
import PortfolioThree from '../portfolio/PortfolioOne'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

class AboutOne extends React.Component {

  shouldComponentUpdate() {
    return false
  }
  
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            width: 100%;
            background-color: transparent;

        `

        const AboutContainer = styled(Container)`
            padding: 250px 0 100px 0;
            @media (min-width:600px) and (max-width:768px) {
                padding: 350px 0 100px 0;
            }
            @media (min-width:769px) and (max-width:1024px) {
              padding: 300px 0 100px 0;
            }
            @media (min-width:1025px) and (max-width:1399px) {
              padding: 400px 0 100px 0;
            }
            @media (max-width:767px) {
                padding: 50px 50px;
            }
        `
        const Heading = styled.h1`
            font-size: 100px;
            line-height: 90px;
            font-family: Teko;
            color: #fff;
            text-transform: uppercase;
            @media (min-width:768px) and (max-width:1399px) {
                font-size: 70px;
                line-height: 70px;
            }
            @media (max-width:767px) {
                font-size: 30px;
                line-height: 30px;
                text-align: center;
            }
        `
        const Color = styled.span`
            color: #04e5e5;
            font-size: 120px;
            line-height: 100px;
            font-family: Teko;
            text-transform: uppercase;
            letter-spacing: 2px;
            @media (min-width:768px) and (max-width:1399px) {
                font-size: 80px;
                line-height: 80px;
            }
            @media (max-width:767px) {
                font-size: 40px;
                line-height: 40px;
            }
        `

        const CounterComponent = styled.div`
            margin: 10px 0;
            @media (max-width:767px) {
                margin: 50px 0;
                text-align:center;
            }
            .value {
                font-size: 120px;
                font-family: Teko;
                color: #fff;
                line-height: 90px;
            }
            .text {
                font-size: 20px;
                color: #fff;
            }
            .symbol {
                color: #04e5e5;
                position: absolute;
                font-size: 39px;
                top: -28px;
            }

        `

        const LeftCol = styled(Col)`
            display: flex;
            align-items: center;
        `


        return(
            <Section id="about">
                <AboutContainer>
                  <AboutPersonal />
                  <PortfolioTwo />
                  <PortfolioThree />
                </AboutContainer>
            </Section>
        )
    }

}

export default AboutOne