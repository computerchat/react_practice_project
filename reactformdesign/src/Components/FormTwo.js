import React, { useState } from "react";
export default function FormTwo() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    joiningDate: "",
    password: "",
    confirmPassword: "",
    designation: "",
    department: "",
    gender: "",
    mobileNumber: "",
    birthDate: "",
    address: "",
    photo: "",
    education: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (formData.firstName.trim() === "") {
      formErrors.firstName = "First Name is required";
    }
    if (formData.lastName.trim() === "") {
      formErrors.lastName = "Last Name is required";
    }
    if (formData.email.trim() === "") {
      formErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (formData.joiningDate.trim() === "") {
      formErrors.joiningDate = "Joining Date is required";
    }
    if (formData.password.trim() === "") {
      formErrors.password = "Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }
    if (formData.confirmPassword.trim() === "") {
      formErrors.confirmPassword = "Confirm Password is required";
    }
    if (formData.designation.trim() === "") {
      formErrors.designation = "Designation is required";
    }
    if (formData.department.trim() === "") {
      formErrors.department = "Department is required";
    }
    if (formData.gender.trim() === "") {
      formErrors.gender = "Gender is required";
    }
    if (formData.mobileNumber.trim() === "") {
      formErrors.mobileNumber = "Mobile Number is required";
    } else if (!isValidMobileNumber(formData.mobileNumber)) {
      formErrors.mobileNumber = "Invalid mobile number";
    }
    if (formData.birthDate.trim() === "") {
      formErrors.birthDate = "Birth Date is required";
    }
    if (formData.address.trim() === "") {
      formErrors.address = "Address is required";
    }

    if (formData.education.trim() === "") {
      formErrors.education = "Education is required";
    }

    return formErrors;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidMobileNumber = (mobileNumber) => {
    return /^\d{10}$/.test(mobileNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully");
      console.log(formData);
      setFormData(initialFormData);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
    if (errors.photo) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        photo: "",
      }));
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    setErrors({});
  };
  return (
    <form>
      <p>Basic Information</p>
      <div className="row text-start">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className="text-danger">{errors.firstName}</div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className="text-danger">{errors.lastName}</div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="joiningDate" className="form-label">
              Joining Date
            </label>
            <input
              type="text"
              className="form-control"
              id="joiningDate"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
            />
            {errors.joiningDate && (
              <div className="text-danger">{errors.joiningDate}</div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <div className="text-danger">{errors.confirmPassword}</div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="designation" className="form-label">
              Designation
            </label>
            <input
              type="text"
              className="form-control"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
            {errors.designation && (
              <div className="text-danger">{errors.designation}</div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <input
              type="text"
              className="form-control"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
            {errors.department && (
              <div className="text-danger">{errors.department}</div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-select"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <div className="text-danger">{errors.gender}</div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            {errors.mobileNumber && (
              <div className="text-danger">{errors.mobileNumber}</div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="birthDate" className="form-label">
              Birth Date
            </label>
            <input
              type="text"
              className="form-control"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />
            {errors.birthDate && (
              <div className="text-danger">{errors.birthDate}</div>
            )}
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <div className="text-danger">{errors.address}</div>
            )}
          </div>
        </div>

        <div className="col-md-12">
          <div className="mb-3">
            <label htmlFor="photo" className="form-label">
              Photo
            </label>
            <input
              type="file"
              className="form-control"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
            />
            {errors.photo && <div className="text-danger">{errors.photo}</div>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="education" className="form-label">
              Education
            </label>
            <input
              type="text"
              className="form-control"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
            />
            {errors.education && (
              <div className="text-danger">{errors.education}</div>
            )}
          </div>
        </div>
      </div>
      {/* Rest of the form fields */}

      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Submit
      </button>
      <button
        type="button"
        onClick={handleCancel}
        className="btn btn-secondary mx-2"
      >
        Cancel
      </button>
    </form>
  );
}
