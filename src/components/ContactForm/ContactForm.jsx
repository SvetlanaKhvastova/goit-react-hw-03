import css from "./ContactForm.module.css";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";

import Button from "../Button/Button";
const initialValues = {
  name: "",
  number: "",
};

const addContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact({
      id: nanoid(),
      ...values,
    });
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={addContactSchema} onSubmit={handleSubmit}>
        <Form className={css.contactForm}>
          <div className={css.labelWrapper}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field name="name" placeholder="Enter your name" id={nameFieldId} className={css.input} />
            <span className={css.error}>
              <ErrorMessage name="name" />
            </span>
          </div>
          <div className={css.labelWrapper}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field name="number" placeholder="Enter your phone number" id={numberFieldId} className={css.input} />
            <span className={css.error}>
              <ErrorMessage name="number" />
            </span>
          </div>
          <Button txt="Add contact" />
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
