import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../store/action-creators/updateTodo";
import { AppDispatch } from "../store";
import { TodoTypes } from "../types/types";
import { Button } from "@mui/material";

interface UpdateTodoItem {
  todo: TodoTypes;
  setShow: (value: boolean) => void;
}

const UpdateTodo: FC<UpdateTodoItem> = ({ todo, setShow }) => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: FormikValues = {
    title: todo.title,
    completed: todo.completed,
    description: todo.description,
  };

  const validateForm = (values: FormikValues) => {
    const errors: any = {};
    if (!values.title.trim()) {
      errors.title = "The field cannot be empty";
    }
    return errors;
  };

  const handleSubmit = (values: FormikValues) => {
    setShow(false);
    dispatch(
      updateTodo(todo.id, values.completed, values.title, values.description)
    );
  };

  return (
    <>
      <div className="form">
        <button className="form__close" onClick={() => setShow(false)}></button>
        <h2>Update Todo</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          <Form>
            <label htmlFor="title">Title:</label>
            <Field type="text" id="title" name="title" className="title" />
            <ErrorMessage name="title" component="p" className="error" />
            <label htmlFor="description">Description:</label>
            <Field
              as="textarea"
              id="description"
              name="description"
              className="description"
            />
            <div className="form__status">
              <p>Completed: </p>
              <Field type="checkbox" name="completed" id="completed" />
            </div>
            <Button type="submit" variant="contained" color="primary">
              Update Todo
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default UpdateTodo;
