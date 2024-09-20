import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = ({ className }: { className?: string }) => {
    return (
        <AiOutlineLoading3Quarters className={`${className} animate-spin`} />

    );
};

export default Loader;