import { ReactNode } from "react";

// create title props type
type TTitleProps = {
    children: ReactNode;
    className?: string
}
const Title = ({ className, children }: TTitleProps) => {
    return (
        <h1 className={`${className} text-4xl font-bold text-center`}>{children}</h1>
    );
};

export default Title;