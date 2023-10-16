import React, { useContext } from "react"
import MyInput from "../components/UI/Input/MyInput";
import MyBtn from "../components/UI/Button/MyBtn";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
        navigate('/posts');
    }
    return (
        <div>
            <h1>Login</h1>
            <form className='form' onSubmit={submit}>
                <MyInput type='text' placeholder='Type your username' />
                <MyInput type='password' placeholder='Type your password' />
                <MyBtn>Login</MyBtn>
            </form>
        </div>
    )
};

export default Login;
