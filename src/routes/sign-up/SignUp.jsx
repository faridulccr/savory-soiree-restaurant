import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import eye_slash from "../../assets/icon/eye-slash-regular.svg";
import eye from "../../assets/icon/eye-solid.svg";
import img from "../../assets/others/sign-up.gif";
import Input from "../../components/input/Input";
import SocialMediaSignIn from "../../components/social-media-signin/SocialMediaSignIn";
import useTitle from "../../hooks/useTitle";
import { useAuth } from "../../providers/AuthProvider";
import "../Login/Login.style.css";

const SignUp = () => {
    useTitle("Signup");
    const { signUp } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const form = e.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Please add at least one uppercase");
            return;
        } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Please add at least two digits");
            return;
        } else if (password.length < 6) {
            setError("Please use at least 6 character for your password");
            return;
        }

        try {
            setLoading(true);
            await signUp(email, password, userName, photoURL);
            navigate(location.state?.from || "/");
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign up Successful!",
                showConfirmButton: false,
                timer: 3000,
            });
        } catch (error) {
            Swal.fire(error.message);
            setLoading(false);
            console.log(error);
        }
    };

    return (
        <div className="sign-up-page flex justify-center items-center">
            <div className="sign-up-form grid sm:grid-cols-2 gap-5 items-center py-5 my-10">
                <div className="sm:ps-3 px-5 sm:px-0 md:ps-14 lg:ps-20">
                    <h1 className="text-3xl font-bold text-center">
                        Sign up now!
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            name="name"
                            label="Name"
                            placeholder="Type here"
                        />
                        <Input
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="Type here"
                        />
                        <Input
                            type={hidePassword ? "password" : "text"}
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                        >
                            <img
                                className="absolute right-2 bottom-4 w-5 cursor-pointer"
                                onClick={() => setHidePassword(!hidePassword)}
                                src={hidePassword ? eye_slash : eye}
                                alt="eye"
                            />
                        </Input>
                        {error && <p className="text-error">{error}</p>}
                        <Input
                            type="text"
                            name="photoURL"
                            label="Photo URL"
                            placeholder="Enter URL"
                        />
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn bg-[#D1A054] text-white hover:bg-[#060330]"
                                disabled={!!loading}
                            >
                                {loading ? "loading..." : "Sign Up"}
                            </button>
                        </div>
                    </form>
                    {/* new account and social media icon */}
                    <div className="text-center">
                        <p className="text-[#D1A054] font-semibold text-lg my-3">
                            Already registered?{" "}
                            <Link to="/login" className="font-bold">
                                Go to log in
                            </Link>
                        </p>
                        <p className="font-semibold">Or sign up with</p>
                        <SocialMediaSignIn />
                    </div>
                </div>
                <img
                    className="hidden sm:block h-auto w-full md:w-3/4 mx-auto"
                    src={img}
                    alt=""
                />
            </div>
        </div>
    );
};

export default SignUp;
