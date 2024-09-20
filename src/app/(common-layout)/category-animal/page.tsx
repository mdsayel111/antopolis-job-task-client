import ButtonSection from "@/components/modules/category-animal/button-section/ButtonSection";
import CategorySection from "@/components/modules/category-animal/category-section/CategorySection";
import Card from "@/components/shared/card/Card";
import { getAllAnimal } from "@/services/animal";
import { getAllCategory } from "@/services/category";
import { TAnimal } from "@/types/animal";
import { Container } from "@mui/material";



const page = async ({ searchParams }: { searchParams: Record<string, unknown> }) => {
    const { data } = await getAllCategory()
    const { data: animalData } = await getAllAnimal(searchParams.category as string)
    return (
        <div>
            <div className="my-10">
                <div className="flex justify-between items-start flex-col lg:flex-row gap-8">
                    <CategorySection categories={data} />
                    <ButtonSection category={data} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-col-6 mt-10">
                    {
                        animalData.map((animal: TAnimal) => <Card key={animal._id} data={animal} />)
                    }
                </div>
            </div>
        </div>

    );
};

export default page;