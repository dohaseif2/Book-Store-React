import React, { useState} from "react";
import Table from "react-bootstrap/Table";
import { Link, useLoaderData } from "react-router-dom";
import {deleteBook} from '../api/bookApi'
export function TableData() {

  const {data}=useLoaderData();
  console.log(data);
  let [books,setBooks]=useState(data);
    const deleteHandler=async(bookId)=>{
      await deleteBook(bookId); 
     const newList=books.filter(book=>book.id !== bookId);
     setBooks([...newList]);
    }
  return (
    <div>
    <Link to='/books/0/edit'>
      <i className="bi bi-plus-circle-fill"></i>
      </Link>
    <Table striped bordered hover>
      
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>desc</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books&& books.map(book=>{
          return( 

            <>
              <tr key="book.id">
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.desc}</td>
                <td>

                  <Link to={`/books/${book.id}`}><i className="bi bi-eye-fill"></i></Link>
                  <Link to={`/books/${book.id}/edit`}><i className="bi bi-pencil-square"></i></Link>
                  {/* <button  onClick={() => deleteItem(index)}><i className="bi bi-trash3-fill"></i></button> */}
                  <Link ><i onClick={()=>deleteHandler(book.id)} className="bi bi-trash3-fill"></i></Link>

                </td>
              </tr>
            </>
          )
          
        })}
        
        {/* {products.map((product,index) => {
          console.log(product);
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{product.name}</td>
              <td >{product.price}</td>
              <td>{product.check ==true?"free shiping":"no free shiping"}</td>
              <td>
                <Link to='/books/2'><i className="bi bi-eye-fill"></i></Link>
               <Link to='/books/2/edit'><i className="bi bi-pencil-square"></i></Link>
                <button  onClick={() => deleteItem(index)}><i className="bi bi-trash3-fill"></i></button>
              </td>
            </tr>
          );
        })} */}
      </tbody>
    </Table>
    </div>
  );
}
