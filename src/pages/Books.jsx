import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useLoaderData } from "react-router-dom";
import { deleteBook } from '../api/bookApi';
import '../css/books.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteBookAction, getAllBookAction } from "../store/bookStore";

export function Books() {
  // const { data } = useLoaderData();
  const dispatch =useDispatch();
  const {books,isloading,error}= useSelector(state=>state.bookSlice);

  useEffect(() => {
    dispatch(getAllBookAction());
  }, [dispatch]);
  let [counter,setCounter]=useState(1)

  const deleteHandler = async (bookId) => {
    dispatch(deleteBookAction(bookId));
  };
  return (
    <div className="book-container">
      <div className="header">
        <h1 className="title">Books List</h1>
        <Link to='/books/0/edit' className="add-book-btn custom-button">
          <i className="bi bi-plus-circle-fill"></i> Add Book
        </Link>
      </div>
      {isloading &&<h1 className="alert alert-success">Loading</h1>}
      {error&&<h1 className="alert alert-danger">Error</h1>}
      <Table  bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book,index) => (
            <tr key={book.id}>
              <td>{index+1}</td>
              <td>{book.title}</td>
              <td>{book.desc}</td>
              <td>
                <Link to={`/books/${book.id}`} className="action-link">
                  <i className="bi bi-eye-fill"></i>
                </Link>
                <Link to={`/books/${book.id}/edit`} className="action-link">
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <i 
                  onClick={() => deleteHandler(book.id)} 
                  className="bi bi-trash3-fill action-link"
                  style={{ cursor: 'pointer' }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
