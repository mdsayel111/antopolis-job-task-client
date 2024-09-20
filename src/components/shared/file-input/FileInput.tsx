import { useFormContext } from "react-hook-form";
import "./file-input.css"
import { useRef } from "react";

// create file input props type
type TFileInputProps = {
    placeholder: string;
    name: string
}

const FileInput = ({ name }: TFileInputProps) => {
    const { setValue } = useFormContext()
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonOnclick = () => {
        console.dir(fileInputRef.current)
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }


    return (
        <div className="flex justify-between items-center px-5 py-3 rounded-lg border-1 border-black bg-gray-200">
            {/* <input {...register(name)}  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-200  focus:outline-none dark:border-gray-600"type="file" placeholder="sadsd" /> */}
            <input onChange={(e) => setValue("img", e?.target?.files && e?.target?.files[0])} ref={fileInputRef} type="file" className="hidden" />
            <p>Image</p>
            <button type="button" onClick={handleButtonOnclick} className="bg-gray-400 py-1 px-2 rounded-xl">Upload</button>
        </div>
    );
};

export default FileInput;