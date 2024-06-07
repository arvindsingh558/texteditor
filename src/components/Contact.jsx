import React from 'react'

function Contact() {
    return (
        <div className='w-full relative top-[78px] z-[1]'>
            <h1 className='text-2xl py-2 flex justify-center mt-1 md:hidden'>Contact Us</h1>

            <div className='flex w-full justify-center items-center md:mt-10'>

                <div className='mt-3 w-full  flex flex-col items-center md:w-2/5'>

                    <div className='flex flex-col justify-center'>
                    <label htmlFor="fname" className='mb-1 ml-1'>Name</label>
                    <input className='border p-2 rounded-xl' type="text" name="" id="fname" placeholder='Name' />
                    </div>

                    <div className='flex flex-col justify-center'>
                    <label className=' mb-1 ml-1 mt-2' htmlFor="myemail">Email</label>
                    <input className='border p-2 rounded-xl' type="email" name="email" id="myemail" placeholder='Email' />
                    </div>

                    <div className='flex flex-col justify-center'>
                    <label className=' mb-1 ml-1 mt-2' htmlFor="message">Message</label>
                    <textarea className='border p-2 rounded-xl' name="" id="message" placeholder='Message' rows={5}></textarea>
                    </div>

                    <div className='flex -ml-28'>
                        <button className='bg-indigo-600 px-4 py-1 rounded-xl mt-2 text-white hover:bg-indigo-400'>Submit</button>
                    </div>
                </div>
                <div className='bg-green-500 md:block hidden md:w-2/5'>
                    <h1 className='text-2xl -mt-44'>Contact Us</h1>
                    <p className=' '> Fill the Details Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad similique fuga officiis cumque. Reprehenderit, excepturi repellat? Earum nulla dolores aliquid.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
