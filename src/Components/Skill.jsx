import { FaHtml5 } from 'react-icons/fa'
import { BsFiletypeCss } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiMysql } from 'react-icons/si'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'

const Skill = () => {
  const comp = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {
    const fadeIn = () => {
      gsap.to('.fade-in', {
        opacity: 1,
        duration: 1,
        ease: 'power-2.out',
        scrollTrigger: {
          trigger: '.fade-in',
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse',
        },
      })
    }
    fadeIn()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
  return (
    <div ref={comp} id='skills'>
      <div>
        <h1>Skills</h1>
      </div>
      <div className='skills-container '>
        <div className='skill-card fade-in'>
          <FaHtml5 />
          <h2>HTML</h2>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className='skill-card fade-in'>
          <BsFiletypeCss />
          <h2>CSS</h2>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className='skill-card fade-in'>
          <FaReact />
          <h2>React</h2>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className='skill-card fade-in'>
          <FaJava />
          <h2>Java</h2>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className='skill-card fade-in'>
          <IoLogoJavascript />
          <h2>JavaScript</h2>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className='skill-card fade-in'>
          <SiMysql />
          <h2>MySQL</h2>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
        </div>
      </div>
    </div>
  )
}

export default Skill
