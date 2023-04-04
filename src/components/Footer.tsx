import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='flex justify-center bg-zinc-100 h-40'>
      <div className="container flex flex-col justify-center items-center font-thin text-zinc-500 mx-auto">
        <div className='w-full flex justify-start'>
          <span className='mb-1'>Contact &nbsp;</span><span>Privacy.</span>
        </div>
          <p className=''><b>TEAM-UP-LOL</b> isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
      </div>
    </footer>
  )
}

export default Footer