import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md: justify-between"> 
        <ul className='flex gap-6 text-gray-400 font-lato'>
            <li>
                <a href="https://github.com/Iannu01"target={'_blank'}>Facebook</a>
            </li>
            <li>
                <a href="https://github.com/Iannu01"target={'_blank'}>Instagram</a>
            </li>
            <li>
                <a href="https://github.com/Iannu01" target={'_blank'}>Twitter</a>
            </li>
        </ul>
        <div className='flex gap-2'>
            <img src="./Assets/Help Avatar.svg" alt="help" />
            <div>
                <p className=' font-playfair  font-thin'>
                    Have Any Question ?
                </p>
                <a href="https://github.com/Iannu01" target={'_blank'} className='font-lato font-medium'>Talk to a specialist</a>
            </div>
        </div>
    </div>
  )
}
export default Footer