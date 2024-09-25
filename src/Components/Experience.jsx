import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
const Experience = () => {
  const comp = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#intro-Slider',
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })
      t1.from('#intro-Slider', { opacity: 1, x: 200, duration: 1 })
      t1.from('#intro-Slider1', { opacity: 1, x: -200, duration: 1 })
      return t1
    }, comp)
    return () => ctx.revert()
  }, [])
  return (
    <div ref={comp} id='experience-section'>
      <h1>Experience</h1>
      <div className='experience-container'>
        <div id='intro-Slider' className='experience-left'>
          <div className='experience-item'>
            <time>January 2024</time>
            <h3>Grader</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Atque dolorem
              tenetur molestiae ab officia unde adipisci rem delectus non!
            </p>
          </div>
        </div>
        <div className='line'></div>
        <div className='dot'></div>
        <div id='intro-Slider1' className='experience-right'>
          <div className='experience-item'>
            <time>February 2024</time>
            <h3>Teaching Assistant</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Atque dolorem
              tenetur molestiae ab officia unde adipisci rem delectus non!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
