import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './components/RootLayout';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import CategoryItems from './pages/CategoryItems';
import FoodDetails from './pages/FoodDetails';

const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path:'/category/:cata',
          element: <CategoryItems />,
        },
        {
          path:'/food-details/:id',
          element: <FoodDetails />,
        },

        {
          path: 'about-page',
          element: <About />
        },
        {
          path: 'contact-page',
          element: <Contact />
        },

        {
          path: '*',
          element: <NotFound />
        }



      ]

    },



  ]);

  return <RouterProvider router={router} />
}

export default App