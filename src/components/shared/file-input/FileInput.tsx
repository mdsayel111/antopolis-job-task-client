import { useFormContext } from "react-hook-form";
import "./file-input.css"

// create file input props type
type TFileInputProps = {
    placeholder: string;
    name: string
}

const FileInput = ({ name, placeholder }: TFileInputProps) => {
    const { register } = useFormContext()
    return (
        <input {...register(name)} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none dark:border-gray-600 " type="file" placeholder={placeholder} />
    );
};

export default FileInput;