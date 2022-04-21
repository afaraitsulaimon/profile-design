import React from 'react'
import styled from 'styled-components'
import {ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes'
import {Design, Develope} from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'



const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
        <Box>
          <LogoComponent theme='light' />
          <SocialIcons theme='light'/>
          <PowerButton />
          <ParticleComponent theme='light' />

            <Main>
                <Title>
                  <Design width={40} height={40} /> Product Manager
                </Title>
                <Description>
                    I love to build products from Ideation to MVP. Research is my world.
                </Description>

                <Description>
                    <strong>Research is my world..</strong>
                    <ul>
                      <li>
                          Digital Product
                      </li>

                      <li>
                          Physical Product
                      </li>
                    </ul>
                </Description>

                <Description>
                    <strong>Tools.</strong>
                    <p>
                          Miro, Google Docs, Jira e.t.c
                    </p>
                </Description>
            </Main>

            <Main>
            <Title>
                  <Develope width={40} height={40} />Software Developer
                </Title>
                <Description>
                    I love engineering part of products, to see how the success of the product can be achieved.
                </Description>

                <Description>
                    <strong>Skills.</strong>
                    <p>
                          Html, Css, Js, Reactjs, PHP, Bootstrap, Sass, and Product Management,
                    </p>
                </Description>

                <Description>
                    <strong>Tools.</strong>
                    <p>
                          VsCode, Github e.t.c
                    </p>
                </Description>
            </Main>

            <BigTitle text="WORK" top='80%' right='30%' />

        </Box>
    </ThemeProvider>
  )
}


const Box = styled.div`

  background-color: ${props => props.theme.body};
  width:100vw;
  height:100vh;
  position:relative;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  
`;


const Main = styled.div`
  border:2px solid ${props => props.theme.text};
  color: ${props => props.theme.body};
  width:30vw;
  height:60vh;
  position:relative;
 z-index:3;
 line-height:1.5;
 cursor:pointer;

 font-family: 'Ubuntu Mono', monospace;
 display:flex;
 flex-direction:column;
 justify-content:space-between;

 &:hover{
   color:  color: ${props => props.theme.body};
   background-color: ${props => props.theme.text};
 }
  
`;

const Title = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:calc(1em + 1vw);

  ${Main}:hover &{

    &>*{
      fill:  ${props => props.theme.body};
    }
  }

  &>*:first-child{
    margin-right:1rem;
  }
   
`;

const Description = styled.div`
color: ${props => props.theme.text};
font-size:calc(0.2em + 1vw);
padding: 1rem ;

${Main}:hover &{

    color:  ${props => props.theme.body};
}

strong{

    margin-bottom: 1rem;
    text-transform: uppercase;
}

ul,p{

  margin-left: 2rem;
}

`;

export default MySkillsPage