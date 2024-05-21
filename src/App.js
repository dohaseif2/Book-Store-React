import './App.css';
import { FormData } from './pages/bookform';
import {Home} from './pages/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { SharedLayout } from './layouts/sharedLayout';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import {Books} from './pages/Books';
import { Bookdetails } from './pages/Bookdetails';
import { getAllBooks, getBookById } from './api/bookApi';
import { Error } from './layouts/Error';
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<SharedLayout/>}>
        <Route index  element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='books' loader={getAllBooks} errorElement={<Error/>} element={<Books/>}/>
        <Route path='books/:id' loader={({ params }) => getBookById(params.id)}  element={<Bookdetails/>}/>
        <Route path='books/0/edit' element={<FormData/>}/>
        <Route path='books/:id/edit' element={<FormData/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
      </>
    )
  );
  return (
    <RouterProvider router={router}/>
  ); 
  
}



export default App;
