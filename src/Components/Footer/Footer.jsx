import React from 'react'

const Footer = () => {
  return (
    <>
        <div id="footer" className='px-20 py-10 flex justify-between bg-[#CFA485]'>
            <div className="container flex justify-between">
            <div id="footerHead">
                <h2 className='text-5xl text-white'>This is Footer</h2>
                <p className='w-60 text-white mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.</p>
            </div>
            <div id="footerImage">
                <img className='w-[300px]' src="images/logo.avif" alt="" />
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer