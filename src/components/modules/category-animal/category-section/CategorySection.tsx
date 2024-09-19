"use client"
import { TCategory } from "@/types/category";
import Tag from "../tag/Tag";
import { useState } from "react";


const CategorySection = ({ categories }: { categories: TCategory[] }) => {
    const [currentCategory, setCurrentCateegory] = useState(categories[0]?._id)
    return (
        <div className="flex">
            {
                categories.map((category) => <Tag key={category._id} category={category} currentCategory={currentCategory} />)
            }
        </div>
    );
};

export default CategorySection;