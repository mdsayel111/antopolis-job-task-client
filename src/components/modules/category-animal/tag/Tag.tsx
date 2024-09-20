"use client"
import { TCategory } from '@/types/category';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

// create tag props type
type TTagProps = {
    category: TCategory;
    currentCategory: string
    setCurrentCateegory: Dispatch<SetStateAction<string>>
}

const Tag = ({ category, currentCategory, setCurrentCateegory }: TTagProps) => {
    return (
            <Link 
            href={`/category-animal?category=${category._id}`} 
            // set current category
            onClick={() => setCurrentCateegory(category._id)}>
                <div className={`py-3 px-5 rounded-3xl border-solid border-2 ${currentCategory === category._id ? "border-[#058F34] text-[#058F34]" : "border-red-500 text-red-500"}`}>
                    {category.name}
                </div>
            </Link>
    );
};

export default Tag;