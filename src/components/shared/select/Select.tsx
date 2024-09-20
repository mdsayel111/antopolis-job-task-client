import { TCategory } from "@/types/category";
import { useFormContext } from "react-hook-form";

// create select props type
type TSelectProps = {
  name: string;
  options: TCategory[];
}

export default function Select({ name, options }: TSelectProps) {
  const { register } = useFormContext()

  // by default select first categor
  if (options[0]) {
    (options[0] as Record<string, unknown>).select = true
  }
  return (
    <select {...register(name)} className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400">
      {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        options.map(options => <option key={options._id} className="!bg-white" value={options._id} selected={(options as Record<string, any>).select}>{options.name}</option>)
      }
    </select >
  );
}

