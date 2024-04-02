import React, { useState } from "react";

export default function FormOne() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    rollNo: "",
    email: "",
    registrationDate: "",
    class: "",
    gender: "",
    mobileNumber: "",
    parentName: "",
    parentMobileNumber: "",
    birthDate: "",
    bloodGroup: "",
    address: "",
    photo: null,
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
    if (formData.rollNo.trim() === "") {
      formErrors.rollNo = "Roll No is required";
    }
    if (formData.email.trim() === "") {
      formErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      formErrors.email = "Invalid email format";
    }
    if (formData.registrationDate.trim() === "") {
      formErrors.registrationDate = "Registration Date is required";
    }
    if (formData.class.trim() === "") {
      formErrors.class = "Class is required";
    }
    if (formData.gender.trim() === "") {
      formErrors.gender = "Gender is required";
    }
    if (formData.mobileNumber.trim() === "") {
      formErrors.mobileNumber = "Mobile Number is required";
    } else if (!isValidPhoneNumber(formData.mobileNumber)) {
      formErrors.mobileNumber = "Invalid phone number format";
    }
    if (formData.parentName.trim() === "") {
      formErrors.parentName = "Parent Name is required";
    }
    if (formData.parentMobileNumber.trim() === "") {
      formErrors.parentMobileNumber = "Parent Mobile Number is required";
    } else if (!isValidPhoneNumber(formData.parentMobileNumber)) {
      formErrors.parentMobileNumber = "Invalid phone number format";
    }
    if (formData.birthDate.trim() === "") {
      formErrors.birthDate = "Birth Date is required";
    }
    if (formData.bloodGroup.trim() === "") {
      formErrors.bloodGroup = "Blood Group is required";
    }
    if (formData.address.trim() === "") {
      formErrors.address = "Address is required";
    }
    // Add validation for other fields similarly

    return formErrors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
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
            {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label text-start">
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
            {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="rollNo" className="form-label">
              Roll No
            </label>
            <input
              type="text"
              className="form-control"
              id="rollNo"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
            />
            {errors.rollNo && <div className="text-danger">{errors.rollNo}</div>}
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
            <label htmlFor="registrationDate" className="form-label">
              Registration Date
            </label>
            <input
              type="text"
              className="form-control"
              id="registrationDate"
              name="registrationDate"
              value={formData.registrationDate}
              onChange={handleChange}
            />
            {errors.registrationDate && <div className="text-danger">{errors.registrationDate}</div>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="class" className="form-label">
              Class
            </label>
            <select
              className="form-select"
              id="class"
              name="class"
              value={formData.class}
              onChange={handleChange}
            >
              <option value="">Select Class</option>
              <option value="Computer">Computer</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Commerce">Commerce</option>
            </select>
            {errors.class && <div className="text-danger">{errors.class}</div>}
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
            {errors.gender && <div className="text-danger">{errors.gender}</div>}
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
            {errors.mobileNumber && <div className="text-danger">{errors.mobileNumber}</div>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="parentName" className="form-label">
              Parent Name
            </label>
            <input
              type="text"
              className="form-control"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
            />
            {errors.parentName && <div className="text-danger">{errors.parentName}</div>}
          </div>
        </div>  

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="parentMobileNumber" className="form-label">
              Parent Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="parentMobileNumber"
              name="parentMobileNumber"
              value={formData.parentMobileNumber}
              onChange={handleChange}
            />
            {errors.parentMobileNumber && <div className="text-danger">{errors.parentMobileNumber}</div>}
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
            {errors.birthDate && <div className="text-danger">{errors.birthDate}</div>}
          </div>
        </div>

         <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="bloodGroup" className="form-label">
              Blood Group
            </label>
            <input
              type="text"
              className="form-control"
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
            />
            {errors.bloodGroup && <div className="text-danger">{errors.bloodGroup}</div>}
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
            {errors.address && <div className="text-danger">{errors.address}</div>}
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
      </div>
      {/* Rest of the form fields */}

      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Submit
      </button>
      <button type="button" onClick={handleCancel} className="btn btn-secondary mx-2">
        Cancel
      </button>
    </form>
  );
}
