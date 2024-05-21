import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../css/formData.css';
import { getBookById } from '../api/bookApi';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/form.css';
import { useDispatch } from 'react-redux';
import { addNewBookAction, editBookAction } from '../store/bookStore';

export function FormData() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    desc: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id && id !== '0') {
          const response = await getBookById(id);
          setBook(response.data);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError('Book not found');
        } else {
          setError('An error occurred while fetching the book');
        }
      }
    };
    fetchData();
  }, [id]);

  const changeHandler = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (id && id !== '0') {
        dispatch(editBookAction({ bookId: id.toString(), updatedBook: book }));
      } else {
        dispatch(addNewBookAction(book));
      }
      navigate('/books');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        {error && <p className="error">{error}</p>}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              onChange={changeHandler}
              value={book.title}
            />
            <Form.Control.Feedback type="invalid">
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDesc">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              name="desc"
              onChange={changeHandler}
              value={book.desc}
            />
            <Form.Control.Feedback type="invalid">
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" className="custom-button" type="submit">
            {id && id !== '0' ? "Edit" : "Add"}
          </Button>
        </Form>
      </div>
    </div>
  );
}
