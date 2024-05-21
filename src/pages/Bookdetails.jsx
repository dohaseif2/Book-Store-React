import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBookById } from '../api/bookApi';
import '../css/details.css';

export function Bookdetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBookById(id);
        setBook(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className='book-details-container'>
      <div className='book-details-content'>
        <h1>Book Details</h1>
        <p><strong>Title:</strong> {book.title}</p>
        <p><strong>Description:</strong> {book.desc}</p>
        <Link to='/books' className='btn'>Back to Books</Link>
      </div>
    </div>
  );
}
