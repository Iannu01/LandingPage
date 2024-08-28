import React from 'react'

const Body = () => {
    return (
        <div className="space-y-4 lg:flex">
            <div className="flex justify-center items-center lg:flex-1 lg:order-2 lg:justify-end">
                <img src="./Assets/Blue Shape.svg" alt="1st" className="-rotate-45 h-64 md:h-72 lg:h-[400px]" />
                <img src="./Assets/Pink Shape.svg" alt="2nd" className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]" />
                <img src="./Assets/Purple Shape.svg" alt="3rd" className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]" />
                <img src="./Assets/Hero Image (Model).png" alt="hero" className="absolute h-64 md:h-72 lg:h-[400px]" />
            </div>
            <div className=' lg:flex-1 lg:order-1'>
                <h1 className="text-5xl font-bold fobt-playfair leading-tight">
                    Host your Website in less then 5 minutes
                </h1>
                <p className="font-lato text-gray-400">
                        With Hostarr, get your Website up and running in no less than 5 minutes with the most competitive pricing pakage avaiable online
                </p>
                <form action="" className="flex flex-col gap-4 md:flex-row">
                    <input className=" rounded-md px-4 py-3 placeholder:text-gray-400 " type="email" placeholder='Enter Your Email Address' />
                    <button className="rounded-md px-4 py-3 text-white bg-blue-400 hover:bg-blue-600"> Join Waitlist</button>
                </form>
                <div className="flex gap-2">
                    <img src="./Assets/Checkmark.svg" alt="Check" />
                    <p className=" font-lato text-gray-400">No spam, ever. Unsubscribe anytime </p>
                </div>
            </div>
        </div>
    )
}
// @Copyright to Aneesh Choudhary githubId (@iannu01)
export default Body