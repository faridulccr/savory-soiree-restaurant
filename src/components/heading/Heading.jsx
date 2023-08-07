const Heading = ({ heading, subHeading, ...rest }) => {
    return (
        <div className="mt-16" {...rest}>
            <p className="italic text-[#D99904] text-lg text-center">
                ---{subHeading}---
            </p>
            <h2 className="w-2/3 uppercase sm:w-1/2 mx-auto border-y-4 mt-5 mb-12 font-['Inter'] text-xl sm:text-3xl md:text-4xl text-center py-4">
                {heading}
            </h2>
        </div>
    );
};

export default Heading;
