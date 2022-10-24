import React from 'react'
import './Footer.css'
import { Instagram } from '@material-ui/icons'
import { Facebook } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'
import { GitHub } from '@material-ui/icons'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <Instagram/>
            <a href="https://github.com/ValentinProg"><GitHub/></a>
            <Facebook/>
            <LinkedIn/>
        </div>
        <p>&copy; 2022 valentin.com</p>
    </div>
  )
}

export default Footer