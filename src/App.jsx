import './App.css'

function App() {

  return (
    <>
      <div className='text-gray-600'>
        <div>
          <nav>
            <div>
              <h1 className='text-red-900 font-bold uppercase p-4 border-b border-gray-100 font-serif'>
                <a href="/">Food Page</a>
              </h1>
            </div>
            <ul>
              <li className='text-gray-800 font-medium'>
                <a href='#'><span>Home</span></a>
              </li>
              <li>
                <a href='#'><span>About</span></a>
              </li>
              <li>
                <a href='#'><span>Contact</span></a>
              </li>
            </ul>
          </nav>
        </div>

        <main className='px-16 py-6 bg-gray-100'>
          <div className='flex justify-center md:justify-end'>
            <a href='#' className='text-rose-400'>Log In</a>
            <a href='#' className='text-rose-400 ml-4'>Sign Up</a>
          </div>

          <header>
            <h2 className='text-red-600 text-6xl font-semibold font-serif pb-2 pt-4'>Recipes</h2>
            <h3 className='text-red-400 text-xl font-semibold font-serif'>for Food Lovers</h3>
          </header>

          <div>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200 font-mono'>Latest Recipes</h4>

            <div className='mt-8'>
              <div className='card'>
                <img src="src\assets\pancakes.jpg" alt="pancakes" className='w-full h-32 sm:h-48 object-cover'></img>
                <div className='m-4'>
                  <span className='font-bold'>Pancakes</span>
                  <span className='block text-gray-500 text-sm'>Recipe by XYZ</span>
                </div>
                <div className='badge'>
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
              <button className='bg-rose-400 text-white p-2 rounded-md'>Load More</button>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default App
