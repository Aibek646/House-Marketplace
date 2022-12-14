import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { email, password } = formData;

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            if (userCredential.user) {
                navigate("/");
            }
        } catch (error) {
            toast.error("Bad User Credentials");
        }
    };

    // const handleSubmit2 = (e) => {
    //     e.preventDefault();
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             const user = userCredential.user;
    //             if (user) {
    //                 navigate("/");
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">Welcome back</p>
                </header>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="emailInput"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <div className="passwordInputDiv">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="passwordInput"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={handleChange}
                        />
                        <img
                            src={visibilityIcon}
                            alt="show password"
                            className="showPassword"
                            onClick={() =>
                                setShowPassword((prevState) => !prevState)
                            }
                        />
                    </div>
                    <Link to="/forgot-password" className="forgotPasswordLink">
                        Forgot Password
                    </Link>
                    <div className="signInBar">
                        <p className="signInText">Sign In</p>
                        <button className="signInButton">
                            <ArrowRightIcon
                                fill="#ffffff/"
                                width="34px"
                                height="34px"
                            />
                        </button>
                    </div>
                </form>

                {/* Google OAth */}
                <OAuth />
                <Link to="/sign-up" className="registerLink">
                    Sign Up Instead
                </Link>
            </div>
        </>
    );
}

export default SignIn;
