import React from 'react'

const Header = () => {
  return (
    <>
      <div className='header-main'>
        <div>
            <span><span style={{color:"aqua", fontWeight:"bolder",fontSize:"20px"}}>Health</span>Care.</span>
        </div>
        <div className='mid-item'>
            <span><i class="fa fa-search" aria-hidden="true"></i></span>
            <input type="text" placeholder='Search'/>
            <span><i class="fa fa-bell" aria-hidden="true"></i></span>
        </div>
        <div className='right'>
            <div className='emoji'>
                😎
            </div>
            <div className='plus'>
                <i class="fa fa-plus" aria-hidden="true"></i>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
