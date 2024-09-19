import { TCategory } from '@/types/category';
import Link from 'next/link';
import React from 'react';

// create tag props type
type TTagProps = {
    category: TCategory;
    currentCategory: string
}

const Tag = ({ category, currentCategory }: TTagProps) => {
    return (
        <div>
            <Link href={"/category-animal"}><div className={`py-3 px-5 rounded-3xl border-solid border-2 ${currentCategory === category._id ? "border-[#058F34] text-[#058F34]" : "border-red-500 text-red-500"}`}>Tag</div></Link>
        </div>
    );
};

export default Tag;