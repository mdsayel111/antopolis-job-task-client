import CategorySection from "@/components/modules/category-animal/category-section/CategorySection";
import { getAllCategory } from "@/services/animal";



const page = async () => {
    const {data} = await getAllCategory()
    return (
        <div className="my-10">
            <CategorySection categories={data}  />
        </div>
    );
};

export default page;