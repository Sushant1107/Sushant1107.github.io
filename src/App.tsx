import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import { HeaderSimple } from './components/Header/HeaderSimple';
import { NothingFound } from './pages/ErrorPages/NothingFound';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import { myName } from './assets/databse';

console.log("My name is " , myName);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement : <NothingFound/>
  },
  {
    path: "/about",
    element: <AboutMe/>,
    errorElement : <NothingFound/>
  },
  {
    path: "/contact",
    element: <div>Contact Me!</div>,
    errorElement : <NothingFound/>
  },
]);

function App() {
  return (
  <MantineProvider defaultColorScheme="dark">
    <HeaderSimple/>
    <RouterProvider router={router}/>
  </MantineProvider>
  );
}

export default App
