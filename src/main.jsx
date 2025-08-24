import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home/Home';
import CategoryNews from './Pages/News/CategoryNews';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    children:[
      {
path:"",
element: <Navigate to={`/category/01`}></Navigate>
      },
      {
         path:"/category/:id",
         element:<CategoryNews></CategoryNews>,
         loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
      {
        path:"/",
        element:<Home></Home>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
