import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import React, { FC } from "react";
import { addTodo } from "../store/action-creators/addTodo";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { Button } from "@mui/material";

const initialValues: FormikValues = {
  title: "",
};

interface AddTodoItem {
  setFormShow: (value: boolean) => void;
}

const AddTodo: FC<AddTodoItem> = ({ setFormShow }) => {
  const dispatch = useDispatch<AppDispatch>();
  const validateForm = (values: FormikValues) => {
    const errors: any = {};
    if (!values.title.trim()) {
      errors.title = "The field cannot be empty";
    }
    return errors;
  };

  const handleSubmit = (values: FormikValues) => {
    dispatch(addTodo(values.title, values.description));
    setFormShow(false);
  };

  return (
    <>
      <div className="form">
        <button
          className="form__close"
          onClick={() => setFormShow(false)}
        ></button>
        <h2>Add new Todo</h2>
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
            <Button type="submit" variant="contained" color="primary">
              Add Todo
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddTodo;
