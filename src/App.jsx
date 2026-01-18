import { useState } from 'react';
import './App.css';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='text-gray-600 md:grid grid-cols-5'>

        <div className='md:col-span-1 md:flex md:justify-end'>
          <nav className='text-right'>
            <div className='flex justify-between items-center'>
              <h1 className='text-red-800 font-bold uppercase p-4 border-b border-gray-100 font-serif'>
                <a href="/">Food Page</a>
              </h1>

              <div className='px-4 cursor-pointer md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              </div>
            </div>
            <ul className={`text-sm mt-6 ${
              isMenuOpen ? 'block' : 'hidden'} md:block`} >
              <li className='text-gray-800 font-medium py-1'>
                <a href='#' className='px-4 flex justify-end border-r-4 border-rose-400'>
                  <span>Home
                    <svg className='w-5 inline-block ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
                  </span></a>
              </li>
              <li className='py-1'>
                <a href='#' className='px-4 flex justify-end border-r-4 border-white'>
                  <span>About
                    <svg className='w-5 inline-block ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" /></svg>
                  </span></a>
              </li>
              <li className='py-1'>
                <a href='#' className='px-4 flex justify-end border-r-4 border-white'>
                  <span>Contact
                    <svg className='w-5 inline-block ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  </span></a>
              </li>
            </ul>
          </nav>
        </div>

        <main className='px-16 py-6 bg-gray-100 md:col-span-4'>
          <div className='flex justify-center md:justify-end'>
            <a href='#' className='text-rose-400 btn border-rose-400 border-2 hover:bg-rose-400 hover:text-white transition ease-out duration-400'>Log In</a>
            <a href='#' className='text-rose-400 ml-4 btn border-rose-400 border-2 hover:bg-rose-400 hover:text-white transition ease-out duration-400'>Sign Up</a>
          </div>

          <header>
            <h2 className='text-red-600 text-6xl font-semibold font-serif pb-2 pt-4'>Recipes</h2>
            <h3 className='text-red-400 text-xl font-semibold font-serif'>for all foodies</h3>
          </header>

          <div>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200 font-mono'>Latest Recipes</h4>

            <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>

              <div className='card'>
                <img src="src\assets\pancakes.jpg" alt="pancakes" className='w-full h-32 sm:h-48 object-cover'></img>
                <div className='m-4'>
                  <span className='font-bold'>Pancakes</span>
                  <span className='block text-gray-500 text-sm'>Recipe by XYZ</span>
                </div>
                <div className='badge'>
                  <svg className='w-5 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  <span>25 mins.</span>
                </div>
              </div>

              <div className='card'>
                <img src="src\assets\pizza.png" alt="pizza" className='w-full h-32 sm:h-48 object-cover'></img>
                <div className='m-4'>
                  <span className='font-bold'>Pizza</span>
                  <span className='block text-gray-500 text-sm'>Recipe by XYZ</span>
                </div>
                <div className='badge'>
                  <span>25 mins.</span>
                </div>
              </div>

            </div>

            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200 font-mono'>Most Popular Recipes</h4>
            <div className='mt-8'>

            </div>


            <div className='flex justify-center'>
              <button className='bg-rose-400 text-white btn hover:shadow-inner transform hover:scale-110 transition ease-out duration-400'>Load More</button>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default App;