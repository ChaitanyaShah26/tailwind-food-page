import './App.css'

function App() {

  return (
    <>
      <div className='text-gray-600'>
        <div>
          <nav>
            <div>
              <h1 className='text-red-900 font-bold uppercase p-4 border-b border-gray-100'>
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

        <main className='px-16 py-6'>
          <div>
            <a href='#'>Log In</a>
            <a href='#'>Sign Up</a>
          </div>

          <header>
            <h2 className='text-red-600 text-6xl font-semibold'>Recipes</h2>
            <h3 className='text-red-400 text-2xl font-semibold'>for Food Lovers</h3>
          </header>

          <div>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>

            <div className='mt-8'>
              <div>
                <img src="" alt=""></img>
                <div>
                  <span>Dish Name</span>
                  <span>Recipe by</span>
                </div>
              </div>
            </div>

            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular Recipes</h4>
            <div className='mt-8'>

            </div>


            <div>
              <button>Load More</button>
            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default App
