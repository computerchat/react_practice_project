import { useState } from "react";

export default function Signin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    // Clear the error message when the user starts typing valid input
    if (name === "name" && errors.name) {
        setErrors({ ...errors, name: "" });
      }
      if (name === "cNo" && errors.cNo) {
        setErrors({ ...errors, cNo: "" });
      }
    if (name === "email" && errors.email) {
      setErrors({ ...errors, email: "" });
    }
    if (name === "password" && errors.password) {
      setErrors({ ...errors, password: "" });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!data.name ) {
      setErrors({ ...errors, name: "require" });
      return;
    }

    if (!data.cNo || !/^\d{10}$/.test(data.cNo)) {
        setErrors({ ...errors, cNo: 'Invalid contact number' });
        return;
      }

      if (!data.email || !data.email.includes("@")) {
        setErrors({ ...errors, email: "Invalid email address" });
        return;
      }

    // Simple password validation
    if (!data.password || data.password.length < 8) {
      setErrors({
        ...errors,
        password: "Password must be at least 8 characters",
      });
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
             <h1> Create an account</h1>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 mt-4 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                      Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={data.name}
                      />
                      {errors.name && (
                        <div className="text-danger">{errors.name}</div>
                      )}
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label htmlFor="cNo" className="col-sm-2 col-form-label">
                      Contact   Number
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control mt-3"
                        id="cNo"
                        name="cNo"
                        onChange={handleChange}
                        value={data.cNo}
                      />
                      {errors.cNo && (
                        <div className="text-danger">{errors.cNo}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 row">
                    <label
                      htmlFor="email"
                      className="col-sm-2 col-form-label"
                    >
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
                      {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
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
                      {errors.password && (
                        <div className="text-danger">{errors.password}</div>
                      )}
                    </div>
                  </div>

                  <button className="btn btn-primary">Signup</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
