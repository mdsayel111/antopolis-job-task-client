import { useFormContext } from "react-hook-form";

// create input props type
type TInputProps = {
    name: string;
    placeholder: string;
    type: string;
    required?: boolean
}

const Input = ({ name, placeholder, type, required }: TInputProps) => {
    const { register } = useFormContext()
    return (
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{name}</label>
            <input {...register(name)} type={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400" placeholder={placeholder} required={required} />
        </div>
    );
};


export default Input;