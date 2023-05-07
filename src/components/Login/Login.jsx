import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./login.css"
import { FcGoogle } from "react-icons/fc";
import { FaRegSnowflake } from "react-icons/fa";
export const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleEmailLogin,
    LoginWithGoogle,
    loginData,
  } = useContext(AuthContext);

  return (
    <div>
      {loginData ? (
        <div>
          <p> ya estas logueado </p>
        </div>
      ) : (
        <div>
          <section class='h-100'>
            <div class='container h-100'>
              <div class='row justify-content-sm-center h-100'>
                <div class='col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9'>
                  <div id="bordeado">
                  <div class='text-center my-5' id="Icon-Logo">
                  <FaRegSnowflake/>
                  </div>
                  </div>
                  <div class='card shadow-lg'>
                    <div class='card-body p-5'>
                      <h1 class='fs-4 card-title fw-bold mb-4'>Login</h1>

                      <form
                        method='POST'
                        class='needs-validation'
                        novalidate=''
                        autocomplete='off'
                        onSubmit={handleEmailLogin}
                      >
                        <div class='mb-3'>
                          <label class='mb-2 text-muted' for='email'>
                            E-Mail Address
                          </label>
                          <input
                            id='email'
                            type='email'
                            class='form-control'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autofocus
                          />
                          <div class='invalid-feedback'>Email is invalid</div>
                        </div>

                        <div class='mb-3'>
                          <div class='mb-2 w-100'>
                            <label class='text-muted' for='password'>
                              Password
                            </label>
                            <a href='forgot.html' class='float-end'>
                              Forgot Password?
                            </a>
                          </div>
                          <input
                            id='password'
                            type='password'
                            class='form-control'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <div class='invalid-feedback'>
                            Password is required
                          </div>
                        </div>

                        <div class='d-flex align-items-center'>
                          <div class='form-check'>
                            <input
                              type='checkbox'
                              name='remember'
                              id='remember'
                              class='form-check-input'
                            />
                            <label for='remember' class='form-check-label'>
                              Remember Me
                            </label>
                          </div>
                          <button type='submit' class='btn btn-primary ms-auto'>
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class='card-footer py-3 border-0'>
                      <div class='text-center'>
                        Don't have an account?{" "}
                        <a href='register.html' class='text-dark'>
                          Create One
                        </a>
                      </div>
                    </div>
                    <div class='card-footer py-3 border-0'>
                      <div class='text-center'>
                      <p>Or Login With Google</p>
                        <button onClick={LoginWithGoogle} id="google-icon"><FcGoogle/></button>

                      </div>
                    </div>
                  </div>
                  <div class='text-center mt-5 text-muted'>
                    Copyright &copy; 2023 &mdash; Winter Store
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
