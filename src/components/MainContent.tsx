import { FC } from 'react';
import RecommendationList from './RecommendationList';
import { useCollection } from '@/hooks/collection';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const MainContent: FC = () => {
    const { data, isLoading, error } = useCollection('playlist');
    return (
        <div className="flex-1 bg-gradient-to-b from-green-700 to-black text-white p-4 rounded-lg">
            <div className="mb-8">
                <div className="space-y-8 overflow-y-scroll h-[calc(100vh-200px)]">
                    {data?.map((item, index) => (
                        <RecommendationList key={index} title={item.name} collectionId={item.id} />
                    ))}
                </div>
            </div>
            <LoadingSpinner isLoading={isLoading} />
            <ErrorMessage message="เกิดข้อผิดพลาดในการโหลดข้อมูล" isError={!!error} />
        </div>
    );
};

export default MainContent;