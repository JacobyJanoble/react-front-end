import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


  return (
    <>
        <nav>
            <div className='div-header'>
                <div style={{display:'block', flexDirection:'row', alignItems:'center'}}>
                    <h2>StreetFighter Finder</h2>
                </div>
                <div>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                        <Link to="/character" className='btn'>
                            FINDER
                        </Link>
                        <Link to="/" className='btn'>
                            HOME
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    </>
  )
}

export default Navbar