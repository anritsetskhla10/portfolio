import logo from '../assets/logo.svg'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'


function Navbar() {

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="logo" className='w-16 h-16 mx-2' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
           <a href="https://www.linkedin.com/in/anri-tsetskhlashvili-753a43297/"><FaLinkedin/></a> 
           <a href="https://github.com/anritsetskhla10"><FaGithub/></a> 
           <a href="https://x.com/anritsetskhla"><FaSquareXTwitter/></a> 
           <a href="https://www.instagram.com/anri_tsetskhla/"><FaInstagram/></a> 
        </div>
    </nav>
  )
}

export default Navbar
