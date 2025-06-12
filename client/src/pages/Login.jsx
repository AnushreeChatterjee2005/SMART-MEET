import React from 'react'

const Login = () => {
    return (
    <div className="formContainer">

        <div className="smart-header">
            <div className="smart-logo">
                <h2><Link id='smart-logo-h2' to={"/"}>Smart Meet</Link></h2>
            </div>
        </div>

        <div className="formwrapper">
            <span className="title">Login</span>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p>Not registered? <Link to={'/register'}>Register now!</Link></p>
        </div>
    </div>
)

}

export default Login;