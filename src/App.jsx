import './App.css'

function App() {

  return (
    <>
      <div>
        <div>
          <nav>
            <div>
              <h1>
                <a href="/">Food Page</a>
              </h1>
            </div>
            <ul>
              <li>
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

        <main>
          <div>
            <a href='#'>Log In</a>
            <a href='#'>Sign Up</a>
          </div>

          <header>
            <h2>Recipes</h2>
            <h3>For Food Lovers</h3>
          </header>

          <div>
            <h4>Latest Recipes</h4>

            <div>
              <div>
                <img src="" alt=""></img>
                <div>
                  <span>Dish Name</span>
                  <span>Recipe by</span>
                </div>
              </div>
            </div>

            <h4>Most Popular Recipes</h4>
            <div>

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
