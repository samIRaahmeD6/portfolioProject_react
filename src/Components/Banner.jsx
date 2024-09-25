import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import profilepic from '../assets/profilepic.jpg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
const Banner = () => {
  const comp = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from('#intro-slider', {
        yPercent: '100',
        duration: 1.3,
        delay: 0.3,
      })
        .from(['#title'], {
          opacity: 0,
          y: '-=30',
          stagger: 0.5,
        })
        .to([], {
          opacity: 0,
          y: '+=30',
          delay: 0.2,
          stagger: 0.5,
        })
      return t1
    }, comp)
    return () => ctx.revert()
  }, [])
  return (
    <div ref={comp} id='Home'>
      <div className='Banner'>
        <h2 id='title' style={{ height: '0.2rem' }}>
          Hello, I am
        </h2>
        <h2 id='title' style={{ height: '0.4rem' }}>
          Samira Ahmed
        </h2>
        <p id='title'>I am a fullstack developer</p>
        <div id='intro-slider'>
          <button className='btnDownload'>Download</button>
          <button className='btnAbout'>About Me</button>
        </div>
        <div id='intro-slider' className='icons'>
          <FaGithub className='git' />
          <FaLinkedinIn className='linkedin' />
        </div>
        <img
          id='intro-slider'
          className='BannerImg'
          src={profilepic}
          alt='not found'
        />
      </div>
    </div>
  )
}

export default Banner
