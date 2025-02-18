import React, { useEffect, useRef, useCallback } from 'react';
import { ArrowUpRight, CircleDot} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WrapperContainer from '../../../Layout/WrapperContainer';

gsap.registerPlugin(ScrollTrigger);

// Existing stats data
const STATS_DATA = [
  { value: 58, label: 'Projects Delivered' },
  { value: 99, label: 'Client Satisfaction' },
  { value: 55, label: 'Services Solutions' }
];

const StatItem = React.memo(({ value, label }) => (
  <div>
    <div className="text-3xl font-bold text-blue-600">{value}+</div>
    <div className="text-blue-800/70">{label}</div>
  </div>
));

function Introduction() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const gradientTextRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const servicesSectionRef = useRef(null);

  const setupInitialState = useCallback(() => {
    const elements = [
      badgeRef.current,
      headingRef.current,
      gradientTextRef.current,
      descriptionRef.current,
      buttonsRef.current,
      statsRef.current
    ].filter(Boolean);

    gsap.set(elements, { opacity: 0, y: 20 });
    if (imageWrapperRef.current) {
      gsap.set(imageWrapperRef.current, { opacity: 0, x: 50 });
    }
  }, []);

  const createAnimationSequence = useCallback(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (!badgeRef.current) return tl;

    return tl
      .to(badgeRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6 
      })
      .to([headingRef.current, gradientTextRef.current].filter(Boolean), { 
        opacity: 1, 
        y: 0, 
        duration: 0.6,
        stagger: 0.2
      }, '-=0.3')
      .to(descriptionRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6 
      }, '-=0.3')
      .to(buttonsRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6 
      }, '-=0.3')
      .to(statsRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.6 
      }, '-=0.3')
      .to(imageWrapperRef.current, { 
        opacity: 1, 
        x: 0, 
        duration: 0.8 
      }, '-=0.5');
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      setupInitialState();
      const timeline = createAnimationSequence();

      // Services section animation
      if (servicesSectionRef.current) {
        ScrollTrigger.create({
          trigger: servicesSectionRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(servicesSectionRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out"
            });
          },
          once: true
        });
      }

      return () => {
        timeline.kill();
      };
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [setupInitialState, createAnimationSequence]);

  return (
    <WrapperContainer>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div ref={badgeRef} className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <CircleDot className="w-4 h-4 text-blue-600" />
                <span className="text-blue-900 font-medium">We Provide Complete Digital Solutions</span>
              </div>
              
              <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold text-blue-950 tracking-normal">
                Transforming Ideas into
                <span ref={gradientTextRef} className="block mt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  Digital Excellence
                </span>
              </h1>
              
              <p ref={descriptionRef} className="text-lg text-blue-800/80 leading-relaxed max-w-xl">
                Digiflex.ai empowers businesses with cutting-edge AI solutions and digital transformation services. We turn complex challenges into seamless experiences through innovative technology.
              </p>
              
              <div ref={buttonsRef} className="flex items-center gap-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                  Get Started
                  <ArrowUpRight className="w-4 h-4 transition-transform" />
                </button>
              </div>
              
              <div ref={statsRef} className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-100">
                {STATS_DATA.map((stat, index) => (
                  <StatItem key={index} {...stat} />
                ))}
              </div>
            </div>
            
            <div ref={imageWrapperRef} className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
                alt="AI Technology Visualization"
                className="rounded-3xl shadow-2xl shadow-blue-200 relative z-10 object-cover w-full h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
        
    </WrapperContainer>
  );
}

export default Introduction;