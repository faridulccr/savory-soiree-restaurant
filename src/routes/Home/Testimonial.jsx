import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import quote from "../../assets/quote.png";
import Heading from "../../components/heading/Heading";
import useReview from "../../hooks/useReview";

const Testimonial = () => {
    const [loading, reviews] = useReview();

    return (
        <div>
            <Heading subHeading="What Our Clients Say" heading="TESTIMONIALS" />
            <div className="carousel w-full">
                {!loading &&
                    Array.isArray(reviews) &&
                    reviews.map(({ _id, name, details, rating }, i) => (
                        <div
                            key={_id}
                            id={`slide${i + 1}`}
                            className="carousel-item relative w-full"
                        >
                            <div className="w-11/12 md:w-3/4 mx-auto text-center">
                                <Rating
                                    className="mx-auto"
                                    style={{ maxWidth: 180 }}
                                    value={rating}
                                    readOnly
                                />

                                <div className="my-10">
                                    <img
                                        style={{
                                            width: "50px",
                                            height: "84px",
                                        }}
                                        src={quote}
                                        alt=""
                                    />
                                    <img
                                        className=" ms-2"
                                        style={{
                                            width: "50px",
                                            height: "84px",
                                        }}
                                        src={quote}
                                        alt=""
                                    />
                                </div>

                                <p>{details}</p>
                                <h2 className=" text-3xl text-[#CD9003] uppercase mt-5">
                                    {name}
                                </h2>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a
                                    href={`#slide${
                                        i == 0 ? reviews.length : i
                                    }`}
                                    className="btn btn-circle bg-opacity-20 border-none "
                                >
                                    ❮
                                </a>
                                <a
                                    href={`#slide${
                                        i + 1 == reviews.length ? 1 : i + 2
                                    }`}
                                    className="btn btn-circle bg-opacity-20 border-none"
                                >
                                    ❯
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Testimonial;
