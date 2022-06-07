import { Container } from "react-bootstrap";
import { useRef } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
function User() {
    const nameRef = useRef();
    const emailRef = useRef();
    const navigate = useNavigate();
    function clickHandler(event) {
        event.preventDefault();
        const enteredName = nameRef.current.value;
        const enteredEmail = emailRef.current.value;
        const user = {
            Email: enteredEmail,
            Name: enteredName
        }
        Axios.post("http://localhost:3001/login", user).then((res) => {
            if(res.data==="User already exist"){
            document.getElementById("feed").innerHTML += "User Already exist";
            }
            else{
                navigate("/home",{state:{name:user.Email}});
            }
        });
    }
    return (
        <div>
            <NavBar user="null"/>
        <Container className="mt-3">
            <h4>Login</h4>
            <form action="/add" method="post" onSubmit={clickHandler} className="col-9 mt-3">
                <div className="mb-3 row">
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" readonly className="form-control" id="name" placeholder="Enter your name" ref={nameRef} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" ref={emailRef} placeholder="Enter your email"/>
                    </div>
                </div>
                <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <input type="submit" value="Login" className="btn-success" />
                        </div>
                    </div>
                    <div className="feed" id="feed" style={{'display':'flex','justifyContent':'center','color':'orange','font-size':20}}></div>
            </form>
        </Container>
        </div>
    );
}
export default User;