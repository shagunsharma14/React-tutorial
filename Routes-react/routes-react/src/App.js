import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import User from './components/User';
import Contact from './components/Contact'
import Terms from './components/Terms'
import Social from './components/Social'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout><Home/></Layout>
    },
    {
      path: '/login',
      element: <Layout><Login/></Layout>
    },
    {
      path: '/about',
      element: <Layout><About/></Layout>
    },
    {
      path: "/user/:username",
      element: <Layout><User/></Layout>
    },
    {
      path: '/contact',
      element: <Layout><Contact/></Layout>
    },
    {
      path: '/terms',
      element: <Layout><Terms/></Layout>
    },
    {
      path: '/social',
      element: <Layout><Social/></Layout>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>

  );
}

export default App;
