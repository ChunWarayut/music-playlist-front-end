import { FC } from 'react';
import RecommendationCard from './RecommendationCard';

import { useItems } from '@/hooks/item';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const RecommendationList: FC<{ title: string, collectionId: string }> = ({ title, collectionId }) => {
    const { data, isLoading, error } = useItems(collectionId);
    return (
        <div className="w-full max-w-[calc(100vw-500px)] overflow-x-scroll mb-8">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex space-x-4 overflow-x-scroll p-4">
                {data?.map((item, index) => (
                    <RecommendationCard
                        key={index}
                        title={item.name}
                        description={item.artist}
                        imageUrl={item.photoUrl ?? ''}
                    />
                ))}
                <LoadingSpinner isLoading={isLoading} />
                <ErrorMessage message="เกิดข้อผิดพลาดในการโหลดข้อมูล" isError={!!error} />
            </div>
        </div>
    );
};

export default RecommendationList;