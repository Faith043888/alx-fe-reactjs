import React from "react";
import { useFormik } from "formik";

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormikForm;
