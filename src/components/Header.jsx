import React from 'react'

function Header() {
  return (
    <>
    <div className=' sm:flex justify-between items-center bg-transparent   hidden  max-w-7xl mx-auto px-4 py-6 z-10'>

        <a href="/" className='font-robo text-2xl font-semibold nav-text '> Whitepaper</a>
        <a href="/" className='font-robo text-2xl font-semibold nav-text '> Tokenomics</a>

        <a href="/">
            <img src="images/logo.png" alt="" className=' h-[80px]  glow-anime border-none bg-transparent rounded-full' />
        </a>


        <a href="/" className='font-robo text-2xl font-semibold nav-text '>Pinksale</a>
        <a href="/" className='font-robo text-2xl font-semibold nav-text '> Deployer bot</a>


    </div>
    </>
  )
}

export default Header