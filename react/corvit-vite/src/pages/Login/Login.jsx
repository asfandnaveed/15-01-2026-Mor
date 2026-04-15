import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userData , setUserData] = useState();


    const userLogin =async (e)=>{

        e.preventDefault();


        try{
            const response =await fetch('http://localhost:3000/api/user/login',{

                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:email,
                    pass:password
                })


            });

            const data =await response.json();
            setUserData(data);


            if(userData.status){
                alert(userData.message);
            }else{
                alert(userData.message);
            }

        }catch(e){

        }

    }


    return (
        <div className="bg-light" style={{ minHeight: "100vh" }}>
            {/* SIGN IN SECTION */}
            <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
                <div className="bg-white p-5 rounded shadow-sm" style={{ width: 400 }}>
                    <h3 className="text-center fw-bold mb-4">Sign In</h3>

                    <form onSubmit={userLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control mb-3"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                        />

                        <div className="position-relative mb-3">
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                onChange={(e)=>setPassword(e.target.value)}
                                value={password}
                            />
                            <span
                                style={{ position: "absolute", right: 10, top: 10, cursor: "pointer" }}
                            >
                                👁
                            </span>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <input type="checkbox" className="form-check-input me-2" />
                                <small>Remember me</small>
                            </div>
                            <small className="text-muted" style={{ cursor: "pointer" }}>
                                Forget Password
                            </small>
                        </div>

                        <button className="btn btn-success w-100 rounded-pill mb-3" type="submit">
                            Login
                        </button>
                    </form>

                    <p className="text-center text-muted mb-0">
                        Don’t have account? <span className="text-dark fw-semibold">Register</span>
                    </p>
                </div>
            </div>

            {/* NEWSLETTER */}
            <div className="bg-white py-5 border-top">
                <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3">

                    <div>
                        <h5 className="fw-bold">Subscribe our Newsletter</h5>
                        <p className="text-muted small mb-0">
                            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                        </p>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="form-control"
                            style={{ width: 250 }}
                        />
                        <button className="btn btn-success rounded-pill px-4">
                            Subscribe
                        </button>
                    </div>

                    <div className="d-flex gap-2">
                        <button className="btn btn-success rounded-circle">f</button>
                        <button className="btn btn-light border rounded-circle">t</button>
                        <button className="btn btn-light border rounded-circle">p</button>
                        <button className="btn btn-light border rounded-circle">i</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
