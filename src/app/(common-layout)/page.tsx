import Card from "@/components/shared/card/Card";
import Title from "@/components/shared/title/Title";
import { getAllAnimal } from "@/services/animal";
import { TAnimal } from "@/types/animal";
import { Container } from "@mui/material";


const page = async () => {
  const { data }: { data: TAnimal[] } = await getAllAnimal(null)
  return (
    <Container maxWidth="xl" className="my-10">
      <Title>Assests</Title>
      <div className="my-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
        {/* render animal card */}
        {
          data?.map((animal) => <Card key={animal._id} data={animal} />)
        }
      </div>
    </Container>
  );
};

export default page;