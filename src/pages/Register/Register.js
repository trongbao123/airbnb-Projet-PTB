import React from "react";
import "../Register/register.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { DangKyAction } from "../../redux/Actions/QLNDAction";

export default function Register(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "",
    },
    validationSchema: Yup.object({
      id: Yup.string().required("id cannot be empty"),
      name: Yup.string().required("Tên không được để trống"),
      email: Yup.string()
        .email("Email is not formatted correctly")
        .required("Email cannot be blank!!"),
      password: Yup.string()
        .required("Password can not be blank!!")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/,
          "Password must have a maximum of 1 capital letter 1 number 1 special character and maximum 6 - 8 characters"
        ),
      phone: Yup.string()
        .required("Phone number can not be left blank!!")
        .matches(/^[0-9]+$/, "Invalid phone number required"),
      birthday: Yup.string().required("birthday can not be left blank!!"),
      gender: Yup.string().required("gender can not be left blank!!"),
      role: Yup.string().required("role can not be left blank!!"),
    }),
    onSubmit: (values) => {
      dispatch(DangKyAction(values));
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
      className="body-page page-v1"
    >
      <div className="container">
        <div className="content">
          <h2 className="sky-h3">REGISTER ACCOUNT</h2>
          <h5 className="p-v1">Sign up To Use The Service</h5>
          <div>
            <div className="form-group">
              <input
                type="text"
                name="id"
                onChange={formik.handleChange}
                value={formik.values.id}
                className="form-control"
                placeholder="ID"
              />
              {formik.touched.id && formik.errors.id ? (
                <div style={{ color: "red" }}>{formik.errors.id}</div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                className="form-control"
                placeholder="User Name"
              />
              {formik.touched.name && formik.errors.name ? (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="text"
                className="form-control"
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                type="text"
                className="form-control"
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="form-radio" style={{ color: "#191616" }}>
              <span className="gender">GENDER</span>
              <label htmlFor="gender" style={{ color: "#191616" }}>
                Nam
              </label>
              <input
                type="radio"
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
              />
              {formik.touched.gender && formik.errors.gender ? (
                <div className="text-danger">{formik.errors.gender}</div>
              ) : null}
              <label
                htmlFor="gender"
                style={{ color: "#191616", paddingLeft: 40 }}
              >
                Nữ
              </label>
              <input
                type="radio"
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
              />
              {formik.touched.gender && formik.errors.gender ? (
                <div className="text-danger">{formik.errors.gender}</div>
              ) : null}
            </div>
            <div className="form-group mt-3">
              <input
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                type="number"
                className="form-control"
                placeholder="PHONE NUMBER"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div style={{ color: "red" }}>{formik.errors.phone}</div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                type="date"
                name="birthday"
                onChange={formik.handleChange}
                value={formik.values.birthday}
                className="form-control"
                placeholder="BIRTHDAY"
              />
              {formik.touched.birthday && formik.errors.birthday ? (
                <div style={{ color: "red" }}>{formik.errors.birthday}</div>
              ) : null}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="role"
                onChange={formik.handleChange}
                value={formik.values.role}
                className="form-control"
                placeholder="ROLE"
              />
              {formik.touched.role && formik.errors.role ? (
                <div style={{ color: "red" }}>{formik.errors.role}</div>
              ) : null}
            </div>
            <button type="submit" className="btn btn-default">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
