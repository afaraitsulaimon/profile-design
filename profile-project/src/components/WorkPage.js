import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import {ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import { Work } from "../data/WorkData"
import Card from '../subComponents/Card'
import { YinYang } from './AllSvgs'
import BigTitle from '../subComponents/BigTitle'
import {motion} from 'framer-motion';

const WorkPage = () => {

  const ref = useRef(null);
  const yinyang = useRef(null);


  useEffect(() => {

       let element = ref.current;

       const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`
            yinyang.current.style.transform = `rotate(` + -window.pageYOffset + 'deg)';
       
          }

       window.addEventListener('scroll', rotate);

       return () => window.removeEventListener('scroll', rotate);

  }, []);
  
  return (
    <ThemeProvider theme={DarkTheme}>
        <Box>
          <LogoComponent theme='dark' />
          <SocialIcons theme='dark'/>
          <PowerButton />

          <Main variants={container} initial='hidden' animate='show'>
            { Work.map((d) => {

           return <Card key={d.id} data={d} />
        
            })}
          </Main>

           <Rotate ref={yinyang}>
             <YinYang width={80} height={80} fill={DarkTheme.text} />
           </Rotate>

           <BigTitle text="WORK" top='10%' right='20%' />
        </Box>
    </ThemeProvider>
  )
}


const Box = styled.div`

  background-color: ${props => props.theme.body};
  height:400vh;
  position:relative;
display:flex;
align-items:center;  

`;


const Main = styled(motion.ul)`
position:fixed;
top:12rem;
left:calc(10rem + 15vw);
height:40vh;
display: flex;
color:white;

`;


const Rotate = styled.span`

display: block;
position:fixed;
right:1rem;
bottom:1rem;
width:80px;
height:80px;
z-index:1;

`;


const container = {
  hidden: {opacity:0},

  show:{

    opacity:1,

    transition:{
      staggerChildren:0.5,
      duration: 0.5,
    }
  }
}








export default WorkPage