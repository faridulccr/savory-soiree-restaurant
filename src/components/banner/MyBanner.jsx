import { Parallax } from "react-parallax";

const MyBanner = ({ image, title, subTitle }) => {
    return (
        <div className=" mb-7">
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={image}
                bgImageAlt={title}
                // strength={-200}
            >
                <div className="hero h-[400px] sm:h-[500px]">
                    <div className="hero-content text-center text-neutral-content w-5/6 sm:w-2/3 h-1/2 mx-auto bg-black bg-opacity-50">
                        <div className="w-5/6 font-['Cinzel']">
                            <h1 className="mb-4 text-2xl sm:text-5xl font-bold uppercase ">
                                {title}
                            </h1>
                            <p className="uppercase">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default MyBanner;
