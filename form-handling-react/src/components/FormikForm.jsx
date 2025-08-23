import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Formik Submitted:", values);

    // Simulate API request
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log("API Response:", data))
      .catch((err) => console.error("Error:", err));

    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="p-4 border rounded w-80 mx-auto">
      <h2 className="text-xl font-bold">Formik Registration Form</h2>
      
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <Field name="username" placeholder="Username" className="border p-2 w-full" />
              <ErrorMessage name="username" component="p" className="text-red-500" />
            </div>

            <div>
              <Field type="email" name="email" placeholder="Email" className="border p-2 w-full" />
              <ErrorMessage name="email" component="p" className="text-red-500" />
            </div>

            <div>
              <Field type="password" name="password" placeholder="Password" className="border p-2 w-full" />
              <ErrorMessage name="password" component="p" className="text-red-500" />
            </div>

            <button type="submit" disabled={isSubmitting} className="bg-green-500 text-white px-4 py-2 rounded">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
