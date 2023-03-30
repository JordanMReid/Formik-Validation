import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik"

function App() {
  // TODO: add a const called formik assigned to useFormik()
 const formik = useFormik({
   initialValues: {
    email: ""
    ,password: ""
   },
  
   onSubmit: (values) =>{
    alert("login succrssful");
   },
  
   validate: (values) => {
     let errors = {};
     if (! values.email) errors.email = "field requird";
     if (! values.password) errors.password = "field requird";
     return errors;
   },
  
  })

  return (
    <div>
      <form onSubmit={ formik.handleSubmit}> 
        <div>email</div>
          <input
           id="emailField"
           typeof="text"
           name="email"
           onChange={formik.handleChange}
           value={formik.values.email}
          />
          
          {formik.errors.email ? (
            <div id="emailError" style={{ color: "red" }}>
              {formik.errors.email}
            </div>
          ) : null}
          
          <div>Password</div>
          <input 
          id="pswField"
           typeof="text"
           name="password"
           onChange={formik.handleChange}
           value={formik.values.password}
          />
          <br />
          {formik.errors.password ? (
            <div id="pswError" style={{ color: "red"}}>
              {formik.errors.password}
            </div>
          ) : null}
          
          <button id="submitBtm"  type="submit">
            submit
          </button>
      </form> 
    </div>
  );
}

export default App;
