import React from 'react'
import {MdCall} from 'react-icons/md'

function Header(){
    return(
        <>
        <div className='header'>
            <h4 style={{alignText:'left'}}>We care</h4>
            <h6>{<MdCall/>}Call us: 8080808080</h6>
                    </div>

        </>
    )
}
export default Header;