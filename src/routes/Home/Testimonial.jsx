import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import quote from "../../assets/quote.png";
import Heading from "../../components/heading/Heading";

const Testimonial = () => {
    const data = [
        {
            name: "Jane Doe",
            description:
                "Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            ratings: 4.5,
        },
        {
            name: "Pitter Doe",
            description: "Various version have evolved over the years,",
            ratings: 5,
        },
        {
            name: "Mr Franklin",
            description: "Various version have evolved over the years,",
            ratings: 4.5,
        },
        {
            name: "Brad Pit",
            description: "Various version have evolved over the years,",
            ratings: 4.8,
        },
    ];
    return (
        <div>
            <Heading subHeading="What Our Clients Say" heading="TESTIMONIALS" />
            <div className="carousel w-full">
                {Array.isArray(data) &&
                    data.map(({ name, description, ratings }, i) => (
                        <div
                            key={i}
                            id={`slide${i + 1}`}
                            className="carousel-item relative w-full"
                        >
                            <div className="w-11/12 md:w-3/4 mx-auto text-center">
                                <Rating
                                    className="mx-auto"
                                    style={{ maxWidth: 180 }}
                                    value={ratings}
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

                                <p>{description}</p>
                                <h2 className=" text-3xl text-[#CD9003] uppercase mt-5">
                                    {name}
                                </h2>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a
                                    href={`#slide${i == 0 ? data.length : i}`}
                                    className="btn btn-circle bg-opacity-20 border-none "
                                >
                                    ❮
                                </a>
                                <a
                                    href={`#slide${
                                        i == data.length - 1 ? 1 : i + 2
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
