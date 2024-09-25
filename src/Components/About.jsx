import profilepic from '../assets/profilepic.jpg'
import { GrUserExpert } from 'react-icons/gr'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
const About = () => {
  const comp = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#intro-slider',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })
      t1.from('#intro-slider', { opacity: 1, x: -200, duration: 1 })
      return t1
    }, comp)
    return () => ctx.revert()
  }, [])
  return (
    <div ref={comp} id='about'>
      <h1 className='headerAbout'>About Me</h1>
      <div id='intro-slider' className='MainAbout'>
        <img id='#intro-slider' className='aboutImg' src={profilepic} alt='' />
        <div className='aboutMe'>
          <div className='cardsContainer'>
            <div className='aboutCard1'>
              <GrUserExpert />
              <h2>Experts</h2>
              <span>Frontend Developer</span>
            </div>
            <div className='aboutCard2'>
              <GrUserExpert />
              <h2>Experts</h2>
              <span>Frontend Developer</span>
            </div>
            <div className='aboutCard3'>
              <GrUserExpert />
              <h2>Experts</h2>
              <span>Frontend Developer</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            vero recusandae aspernatur adipisci quidem ad ducimus, saepe quam
            corporis, excepturi impedit magni perferendis eum sunt? Voluptate
            quisquam nulla provident doloremque.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
