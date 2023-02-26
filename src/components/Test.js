import React, { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import useLocoScroll from '../hooks/useLocoScroll';

export default function Test() {
  useLocoScroll(true);

  useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.create({
      trigger: '.block',
      pin: true,
      start: 'top top',
      markers: true,
      end: 'top bottom',
      pinSpacing: false,
      endTrigger: '.end'
    });

    // Create fade-in animation for .demo-test
    gsap.from('.demo-test', {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.block',
        start: 'top 80%', // adjust as needed
        end: '+=50' // adjust as needed
      }
    });

    // Create scale animation for .end
    gsap.from('.end', {
      scale: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.block',
        start: 'top top',
        end: '+=50' // adjust as needed
      }
    });
    
    // Cleanup function to revert context
    return () => ScrollTrigger.getById('.block').kill();
  }, []);

  return (
    <>
      <div data-scroll-section>
        <div className='block'></div>
        <div className='demo-test'>
          Fugiat occaecat nulla excepteur deserunt. Sunt commodo est dolor qui laboris in dolore mollit eu sit consectetur commodo excepteur. Qui cillum ullamco non ex do labore velit non. Labore ad deserunt exercitation ipsum.

Lorem ex in sint voluptate consequat aute est laborum et dolor incididunt. Dolore aliqua fugiat magna cupidatat cupidatat occaecat anim commodo laboris mollit ad non. Minim commodo consectetur consectetur incididunt mollit est ut do fugiat aute. Non enim exercitation amet ipsum adipisicing excepteur exercitation nisi cupidatat duis ut eu id voluptate. Dolore proident irure consectetur ea fugiat labore est elit nostrud incididunt cillum eiusmod mollit nostrud. Voluptate Lorem ipsum est elit consectetur aliqua fugiat aliquip nostrud aute mollit qui.

Aliqua quis fugiat dolor cupidatat aliquip dolore ea et officia consequat excepteur. Adipisicing aliqua consequat adipisicing laboris amet incididunt. Et excepteur in enim pariatur commodo nulla nostrud ad cupidatat.

Voluptate ad aliqua deserunt labore reprehenderit commodo fugiat id. Ad occaecat anim esse nisi. Aliqua elit ipsum reprehenderit do anim amet culpa enim mollit incididunt aliquip in irure fugiat. Elit ullamco sunt nisi laboris dolor ullamco.

Ipsum eiusmod occaecat eu nulla. Et reprehenderit dolore aliquip qui consectetur eiusmod labore ad. Sit quis ut mollit occaecat adipisicing esse esse non ut cillum proident. Ea culpa incididunt exercitation deserunt laborum incididunt pariatur excepteur aliquip nostrud.

Aliqua nulla voluptate laboris veniam est cillum est dolore fugiat elit nisi ullamco adipisicing consectetur. Duis et commodo non duis ad dolor officia Lorem adipisicing amet sit non eiusmod. Anim in sit incididunt nostrud veniam. Tempor ullamco id officia consequat excepteur qui mollit.

Non est officia ex ea Lorem eu et et laborum incididunt occaecat nulla cillum irure. Ipsum sint magna labore aute magna eu est magna sunt voluptate nostrud sit. Labore do occaecat in labore aliquip adipisicing officia tempor dolor. Duis sit cupidatat consectetur esse quis ipsum. Exercitation et reprehenderit sint laboris ullamco ex cillum esse. Officia minim exercitation excepteur consequat excepteur nostrud eu non deserunt.
        </div>
        <div className='end'>end</div>
      </div>
    </>
  );
}