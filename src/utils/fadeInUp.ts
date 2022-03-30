import {gsap, Cubic} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";


export const landingFadeIn = (ref: React.RefObject<HTMLElement>, delay?: number) => {
    gsap.from(ref.current, {
        scrollTrigger: ref.current,
        duration: 1,
        transform: "translateX(-100px)",
        opacity: 0,
        ease: Cubic.easeInOut,
        delay: delay || 0
    })
}