import React from 'react'

const SignIn = () => {
  return (
    <form >
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input
        type="email"
        className="form-control"
        id="email"
        name="email"
        // value={loginData.email}
        // onChange={handleChange}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input
        type="password"
        className="form-control"
        id="password"
        name="password"
        // value={loginData.password}
        // onChange={handleChange}
        required
      />
    </div>
    <button type="submit" className="btn btn-primary">Sign In</button>
  </form>
  )
}

export default SignIn