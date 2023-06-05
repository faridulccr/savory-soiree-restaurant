import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    LoadCanvasTemplate,
    loadCaptchaEnginge,
    validateCaptcha,
} from "react-simple-captcha";

import { useEffect, useState } from "react";
import img from "../../assets/others/authentication2.png";
import Input from "../../components/input/Input";
import SocialMediaSignIn from "../../components/social-media-signin/SocialMediaSignIn";
import { useAuth } from "../../providers/AuthProvider";
import "./Login.style.css";

const Login = () => {
    const [isDisable, setIsDisable] = useState(true);
    const [captchaValue, setCaptchaValue] = useState("");
    const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const captchaValidation = () => {
        if (validateCaptcha(captchaValue) == true) {
            setIsDisable(false);
        } else {
            alert("Captcha Does Not Match");
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            await login(email, password);
            navigate(location.state?.from || "/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login-page flex justify-center items-center">
            <div className="login-form grid sm:grid-cols-2 gap-5 items-center py-5 my-10">
                <img
                    className="hidden sm:block h-auto w-full md:w-3/4 mx-auto"
                    src={img}
                    alt=""
                />
                <div className="sm:pr-3 px-5 sm:px-0 md:pr-14 lg:pr-20">
                    <h1 className="text-3xl font-bold text-center">
                        Login now!
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="Type here"
                        />
                        <Input
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                        />
                        <a href="/" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>

                        <div className="form-control mt-2">
                            <label className=" label font-bold">
                                <LoadCanvasTemplate />
                            </label>
                            <Input
                                type="text"
                                placeholder="Type thr captcha"
                                value={captchaValue}
                                onChange={(e) =>
                                    setCaptchaValue(e.target.value)
                                }
                            />

                            <button
                                onClick={captchaValidation}
                                className="btn btn-outline btn-accent mt-1"
                            >
                                Verify
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn bg-[#D1A054] text-white hover:bg-[#060330]"
                                disabled={isDisable}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    {/* new account and social media icon */}
                    <div className="text-center">
                        <p className="text-[#D1A054] font-semibold text-lg my-3">
                            New here?{" "}
                            <Link to="/sign-up" className="font-bold">
                                Create a New Account
                            </Link>
                        </p>
                        <p className="font-semibold">Or sign in with</p>
                        <SocialMediaSignIn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
