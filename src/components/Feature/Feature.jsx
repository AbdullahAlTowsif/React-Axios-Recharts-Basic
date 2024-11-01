import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"><FaCircleCheck className="mr-2" />{feature}</p>
        </div>
    );
};

export default Feature;