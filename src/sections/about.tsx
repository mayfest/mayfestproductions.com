'use client';

import { sectionStyles } from '@/components/index';

export default function About() {
  return (
    <section id="about" className={sectionStyles}>
      <div className="text-center font-semibold text-4xl my-8">
        <p className="font-bold text-2xl md:text-3xl text-white">
          At <span className='text-pink-300'>Mayfest Productions</span>,
        </p>
        <p className="font-bold text-5xl md:text-6xl text-purple-300">
          WE DO DILLO DAY
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 my-8">
      <p className="flex-1 text-white text-xl md:text-xl font-semibold">
        <span className='text-purple-300'>Mayfest Productions</span> is a student organization at Northwestern University that plans 
        and produces the nation's largest student-run music festival — <span className='text-purple-300'>Dillo Day</span>, with over 
        12,000 festival attendees. In addition to the festival, Mayfest hosts and promotes a number of other programming events including
        Battle of the Bands and Battle of the DJs. 
      </p>

        <div>
          <iframe
            title="We Do Dillo Day"
            src="https://player.vimeo.com/video/291397953"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-80 h-44 md:w-96 md:h-56 rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
