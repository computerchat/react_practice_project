
import { useState } from "react";
import styles from "./Signin.module.css"
export default function Signin() {
  const [ data, setData] = useState({
    email: "",
    password:""
  })
  const [errors, setErrors ]= useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    
    // Clear the error message when the user starts typing valid input
    if (name === 'email' && errors.email) {
      setErrors({ ...errors, email: '' });
    }
    if (name === 'password' && errors.password) {
      setErrors({ ...errors, password: '' });
    }
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Simple email validation
    if (!data.email || !data.email.includes('@')) {
      setErrors({ ...errors, email: 'Invalid email address' });
      return;
    }

    // Simple password validation
    if (!data.password || data.password.length < 8) {
      setErrors({ ...errors, password: 'Password must be at least 8 characters' });
      return;
    }


    
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
          <div className="col">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/loginimg.jpg"}
                className={`card-img-top ${styles.img}`}
                alt="Login"
              />
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 mt-5 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                      />
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label
                      htmlFor="password"
                      className="col-sm-2 col-form-label"
                    >
                      Password
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                      />
                      {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                  </div>
                  
  <button  className="btn btn-primary">Signin</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
