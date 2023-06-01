const Heading = ({ text, title }) => {
    return (
        <div className="mt-16">
            <p className=" italic text-[#D99904] text-lg text-center">
                ---{text}---
            </p>
            <h2 className=" w-[424px] mx-auto border-y-4 mt-5 mb-12 font-['Inter'] text-4xl text-center py-4">
                {title}
            </h2>
        </div>
    );
};

export default Heading;
