import React from 'react'
import styled, { keyframes } from 'styled-components'
import Progress from '../../../components/progress'
import Timeline from '../parts//Timeline'

class TabsPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "skills"
        }
    }

    render() {
        const TabContainer = styled.div`
            min-height: 400px;
            margin-top: 20px;
            @media (max-width:767px) {
                margin-top: 50px;
                padding: 0 20px;
            }
        `
        const TabSelectors = styled.div`
            display: flex;
            @media (max-width:500px) {
                display: flex;
                flex-direction: column;
                margin-bottom: 15px;
            }
        `
        
        const ColorAnimation = keyframes`
            0%  {border-color: #04e5e5;}
            10% {border-color: #f37055;}
            20% {border-color: #ef4e7b;}
            30% {border-color: #a166ab;}
            40% {border-color: #5073b8;}
            50% {border-color: #04e5e5;}
            60% {border-color: #07b39b;}
            70% {border-color: #6fba82;}
            80% {border-color: #5073b8;}
            90% {border-color: #1098ad;}
            100% {border-color: #f37055;}
        `
        const TabSelector = styled.button`
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            background-color: transparent;
            border: none;
            margin: 0 10px 0 0;
            border-bottom: 2px solid #fff;
            transition: .5s;
            &:hover, &.active {
                animation: ${ColorAnimation} 10s infinite alternate;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 767px) {
                font-size: 18px;
            }
        `

        const Tabs = styled.div`
            margin-top: 20px;
        `

        const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const Tab = styled.div`
            display: none;
            animation: ${Fade} 1s forwards;
        `

        return(
            <TabContainer>
                <TabSelectors>
                    <TabSelector className={this.state.tab === "skills" ? "active" : ""} onClick={() => this.setState({tab: "skills"})}>
                        Trabalhos
                    </TabSelector>
                    <TabSelector className={this.state.tab === "experience" ? "active" : ""} onClick={() => this.setState({tab: "experience"})}>
                        Experi??ncia
                    </TabSelector>
                    <TabSelector className={this.state.tab === "education" ? "active" : ""} onClick={() => this.setState({tab: "education"})}>
                        Contato
                    </TabSelector>
                </TabSelectors>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "skills" ? "block" : "none"
                    }}>
                        <Progress value={90} text="Integra????o e Automa????o de Sistemas" />
                        <Progress value={80} text="Marketing Estrat??gico" />
                        <Progress value={70} text="Desenvolvimento de Sites e Sistemas Web" />
                        <Progress value={100} text="Adequa????o e Conformidade ?? LGPD" />
                        <Progress value={80} text="Gest??o de Frotas" />
                        <Progress value={80} text="Hosting e Compliance" />
                    </Tab>
                </Tabs>
                <Tabs>
                    <Tab style={{
                            display: this.state.tab === "experience" ? "block" : "none"
                        }}>
                        <Timeline data={{
                                "2019 - 2022" :  {
                                    title: "Software House",
                                    institution: "Inova????o",
                                    description: "A Webck ajuda empresas e empres??rios a integrar e automatizar seus processos e fluxos, , reduzindo assim erros, falhas de seguran??a e, por outro lado, aumentando a performance e efici??ncia de seus colaboradores."},  
                            }
                        }
                    />
                    </Tab>
                    <Tab style={{
                            display: this.state.tab === "education" ? "block" : "none"
                        }}>
                        <Timeline data={{
                                "Webck" :  {
                                    title: "Telefone: (84) 3013 4747",
                                    institution: "Email: contato@webck.com.br",
                                    description: "Entre em contato conosco se buscar inova????o e tecnologia para sua empresa!"
                                },
                            }
                        }
                    />
                    </Tab>
                </Tabs>
            </TabContainer>
        )
    }
}

export default TabsPart