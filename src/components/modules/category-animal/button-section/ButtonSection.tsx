"use client"
import FileInput from '@/components/shared/file-input/FileInput';
import Form from '@/components/shared/form/Form';
import Input from '@/components/shared/input/Input';
import Modal from '@/components/shared/modal/Modal';
import Select from '@/components/shared/select/Select';
import { createAnimal } from '@/services/animal';
import { createCategory } from '@/services/category';
import { TCategory } from '@/types/category';
import { uploadSingleImg } from '@/utils';
import { Button } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

// create button section props
type TButtonSectionProps = {
    category: TCategory[]
}

const ButtonSection = ({ category }: TButtonSectionProps) => {

    const router = useRouter()

    // add category modal state
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const handleCategoryModalOpen = () => setCategoryModalOpen(true);
    const handleCategoryModalClose = () => setCategoryModalOpen(false);

    // add animal modal state
    const [animalModalOpen, setAnimalModalOpen] = useState(false);
    const handleAnimalModalOpen = () => setAnimalModalOpen(true);
    const handleAnimalModalClose = () => setAnimalModalOpen(false);

    // mutation for add category
    const { mutate: categoryMutation, isPending: categoryLoading
    } = useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            // Invalidate and refetch
            router.refresh()
            toast.success("Category added successfully!")
            handleCategoryModalClose()
        },
        onError: (error) => {
            console.error('Error creating category:', error);
            toast.error("Failed to add category");
            handleCategoryModalClose()
        },
    })

    // mutation for add category
    const { mutate: animalMutation, isPending: animalLoading } = useMutation({
        mutationFn: createAnimal,
        onSuccess: () => {
            // Invalidate and refetch
            router.refresh()
            toast.success("Animal added successfully!")
            handleAnimalModalClose()
        },
        onError: () => {
            toast.error("Failed to add category");
            handleAnimalModalClose()
        },
    })

    // handle crecreate animal
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCreateAnimal = async (data: any) => {
        // iploading image
        const { url: imgUrl } = await uploadSingleImg(data.img[0])
        const newData = { ...data, img: imgUrl }

        animalMutation(newData)
    }

    // handle create category
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCreateCategory = async (data: any) => {
        categoryMutation(data)
    }

    return (
        <div className='flex justify-between items-center gap-4'>
            {/* add category modal */}
            <Modal loading={categoryLoading} open={categoryModalOpen} setOpen={setCategoryModalOpen} handleClose={handleCategoryModalClose} handleOpen={handleCategoryModalOpen} buttonText='Add Category'>
                <Form onSubmit={handleCreateCategory} formTitle='Add Category'>
                    <Input name="name" placeholder='Name' type='text' required />
                    <Button variant='contained' type='submit' className='!bg-black w-full rounded-xl'>Add Category</Button>
                </Form>
            </Modal>

            {/* add animal modal */}
            <Modal loading={animalLoading} open={animalModalOpen} setOpen={setAnimalModalOpen} handleOpen={handleAnimalModalOpen} handleClose={handleAnimalModalClose} buttonText='Add Animal'>
                <Form formTitle='Add Animal' onSubmit={handleCreateAnimal}>
                    <Input name="name" placeholder='Name' type='text' required />
                    <Select name='category' options={category} />
                    <FileInput name='img' placeholder='Image' />
                    <Button variant='contained' type='submit' className='!bg-black w-full rounded-xl'>Add Animal</Button>
                </Form>
            </Modal>
        </div>
    );
};

export default ButtonSection;