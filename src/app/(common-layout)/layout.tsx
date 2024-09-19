import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen text-[white]">
            {children}
        </div>
    );
};

export default layout;