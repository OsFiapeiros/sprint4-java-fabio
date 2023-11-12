import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js';



import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Contextualizacao from './routes/Contextualizacao.jsx'
import ProblemaxSolucao from './routes/ProblemaxSolucao.jsx'
import Problema from './routes/Problema.jsx'
import Causas from './routes/Causas.jsx'
import Cadastro from './routes/Cadastro.jsx';
import Contato from './routes/Contato.jsx';
import Login from './routes/Login.jsx';
import Footer from './components/Footer.jsx';



const router= createBrowserRouter([
  
  {
    path: '/', element: <App/>, 

    children:[
      {path: '/', element: <Home/>},
      {path: '/Contextualizacao', element: <Contextualizacao/>},
      {path: '/ProblemaxSolucao', element: <ProblemaxSolucao/>},
      {path: '/Problema', element: <Problema/>},
      {path: '/cadastro', element: <Cadastro/>},
      {path: '/contato', element: <Contato/>},
      {path: '/Causas', element: <Causas/>},
      {path: '/login', element: <Login/>},
      {path: '/footer', element: <Footer/>},
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
