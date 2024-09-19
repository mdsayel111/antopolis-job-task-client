'use client'

import { Button } from '@mui/material'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    return (
        <div className='flex min-h-screen justify-center items-center flex-col space-y-6'>
            <h2 className='text-3xl text-center bg-black'>Something went wrong!</h2>
            <Button
                className='!bg-primary font-bold hover:!bg-primary-medium'
                variant='contained'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </Button>
        </div>
    )
}