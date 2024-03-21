import React from 'react'
import logo from '../Image/aLogo-bgremove.png'
const Footer = () => {
  return (
    <div>

<div className='mainBox bg-[#1e465c] grid lg:grid-cols-4  md:grid-cols-2  grid-cols-2 gap-4 lg:p-10 lg:pl-28 md:py-5 md:pl-40 py-5 px-10 text-white'>
<div className=''>
  <h3>Get to Know Us</h3>
<ul>
<li><a href=''>Careers</a></li>
<li><a href=''>About Us</a></li>
<li><a href=''>Investor Relations</a></li>
<li><a href=''>Press Center</a></li>
</ul>

</div>

<div className=''>
<h3 className='font-bold text-xl'>Get to Know Us</h3>
<ul>
<li><a href=''>Careers</a></li>
<li><a href=''>About Us</a></li>
<li><a href=''>Investor Relations</a></li>
<li><a href=''>Press Center</a></li>
</ul>
</div>

<div className=''>
<h3>Get to Know Us</h3>
<ul>
<li><a href=''>Careers</a></li>
<li><a href=''>About Us</a></li>
<li><a href=''>Investor Relations</a></li>
<li><a href=''>Press Center</a></li>
</ul>
</div>
<div className=''>
<h3>Get to Know Us</h3>
<ul>
<li><a href=''>Careers</a></li>
<li><a href=''>About Us</a></li>
<li><a href=''>Investor Relations</a></li>
<li><a href=''>Press Center</a></li>
</ul>
</div>
</div>
{/* end mainbox */}


{/* below start extra navbar for right reserve */}
<hr className=' bg-gray-200'/>
<div className='bg-[#1e465c]'>
<div className='logo'>
<img src={logo}/>
</div>
<div className='condition'>
<a href=''>Condition of Use</a>
<a href=''>Privacy Notice</a>
<a href=''>Your Ads Privacy Choices</a>
<p>&copy;2024, EasyLife.com, Inc.</p>
</div>
</div>

    </div>
  )
}

export default Footer