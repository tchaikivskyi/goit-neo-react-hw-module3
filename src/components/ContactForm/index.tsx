import css from "./style.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { ContactType } from "./../../types";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Мінімум 3 символи")
    .max(50, "Максимум 50 символів")
    .required("Обов'язкове поле"),
  number: Yup.string()
    .matches(/^\d{2,3}-\d{2}-\d{2}$/, "Невірний формат (наприклад: 459-12-56)")
    .required("Обов'язкове поле"),
});

type ContactFormProps = {
  onAdd: (contact: ContactType) => void;
};

export default function ContactForm({ onAdd }: ContactFormProps) {
  return (
    <div className={[css.contactForm, "block-bordered"].join(" ")}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onAdd({ id: nanoid(), ...values });
          resetForm();
        }}
      >
        <Form className={css.form}>
          <label>
            Name
            <Field name="name" />
            <ErrorMessage component="span" name="name" className={css.error} />
          </label>
          <label>
            Number
            <Field name="number" />
            <ErrorMessage
              component="span"
              name="number"
              className={css.error}
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
