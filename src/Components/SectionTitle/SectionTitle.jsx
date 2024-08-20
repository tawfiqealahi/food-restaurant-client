

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto my-2 md:w-80 ">
            <p1 className="text-yellow-600">---{subHeading}---</p1>
            <h3 className="text-4xl  text-gray-50  border-t-2  font-bold
">{heading}</h3>
        </div>
    );
};

export default SectionTitle;