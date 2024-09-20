import Loader from '../../../components/shared/loader/Loader';

const loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Loader className='text-4xl' />
        </div>
    );
};

export default loading;