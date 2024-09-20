import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

// create form props type 
type TFormProps = {
    children: ReactNode;
    formTitle: string;
    onSubmit: SubmitHandler<FieldValues>
}

const Form = ({ children, onSubmit, formTitle }: TFormProps) => {
    const methods = useForm()
    return (
        <div>
            <h2>{formTitle}</h2>
            <FormProvider {...methods}>
                <form className="space-y-4" onSubmit={ methods.handleSubmit(onSubmit)}>
                    {children}
                </form>
            </FormProvider>
        </div>
    )
};
export default Form;