import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import All from './Component/All/All';
import Mainlayout from './Component/MainLayout/mainlayout';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Browsers from './Component/Browsers/Browsers';
import Category from './Component/Category/Ctegory';
import Pc from './Component/PC/Pc';
import Details from './Component/Details/Details';

function App() {

const routers= createBrowserRouter([
  {path:"/",element:<Mainlayout/>,children:[
    {index:true ,element:<Home/>},
    {path:'Games' ,element:<Home/>},
    {path:"all" ,element:<All/>},
    {path:"browser" ,element:<Browsers/>},
    {path:"pc" ,element:<Pc/>},
    {path:"details/:id" ,element:<Details/>},
    {path:"category" ,element:<Category/>},
    {path:"*" ,element:<NotFound/>},
  

 

  ]}
])

    return ( <>
  <RouterProvider router={routers}></RouterProvider>
 
    </>
    );
}

export default App;