
import {useState,useEffect} from 'react'
import './styles/App.css';
import './libs/locomotive-scroll.css';
import Navbar from './components/Navbar';
import Grid from './components/Grid'
import './fonts/Marcellus-Regular.ttf';

import gsap from 'gsap';
import useLocoScroll from './hooks/useLocoScroll';
import LoadingPage from './components/LoadingPage';
function App() {
 useLocoScroll(true)
 
  const TIME_ACTION = 3000
  const TIME_DUR_ALL = 4
  const colorsLine = ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.36)", "rgba(255, 255, 255, 0.18)", "rgba(255, 255, 255, 0.12)"];
  useEffect(() => {
    const listspan = document.querySelectorAll(".loading-screen .text-anime span")
    const listp = document.querySelectorAll(".loading-screen .text-anime span p")
    let ctx = gsap.context(() => {
        let tl = gsap.timeline({onComplete: closeLoadingPage})

        tl.to(listspan[0],{

          duration:(TIME_DUR_ALL/4),
          color:colorsLine[0]
        })
        .to(listspan[1],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[1]
        },"<")
        .to(listspan[2],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[2]
        },"<")
        .to(listspan[3],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[3]
        },"<")
        .add("newLine2")
        tl.to(listspan[0],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[1],
        },"newLine2")
        .to(listspan[1],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[0]
        },"<")
        .to(listspan[2],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[1]
        },"<")
        .to(listspan[3],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[2]
        },"<")
        .add("newLine3")
        tl.to(listspan[0],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[2],
        },"newLine3")
        .to(listspan[1],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[1]
        },"<")
        .to(listspan[2],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[0]
        },"<")
        .to(listspan[3],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[1]
        },"<")
        .add("newLine3")
        tl.to(listspan[0],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[3],
        },"newLine3")
        .to(listspan[1],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[2]
        },"<")
        .to(listspan[2],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[1]
        },"<")
        .to(listspan[3],{
          duration:(TIME_DUR_ALL/4),
          color:colorsLine[0]
        },"<")
        .add("hiddentext")
     
        tl.to(listp,{
          delay:.5,
          duration:(TIME_DUR_ALL/4),
          y:120
        },"hiddentext")
        
      });
    return () => ctx.revert(); // <-- CLEANUP!
  }, [])
  function closeLoadingPage() {
    setTimeout(() => {
    
      const loaddingPageMain = document.querySelector(".loading-screen")
     loaddingPageMain.classList.add('disable-loadding-screen');
    }, TIME_ACTION); 
  }
  return (
    <>
   
   <LoadingPage />
    <section className='container'>
      <Navbar />
      <Grid />
    </section>
     
    </>
  );
}

export default App;
