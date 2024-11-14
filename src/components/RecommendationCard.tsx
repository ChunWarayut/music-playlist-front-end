import Image from 'next/image';
import { FC } from 'react';

interface RecommendationCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const RecommendationCard: FC<RecommendationCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className={`min-w-64 p-4 rounded-lg text-white`}>
            <div className="relative mb-2">
                <Image src={imageUrl} alt={title} className="w-full h-52 object-cover rounded-lg" width={100} height={200} />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
                    <h3 className="text-lg font-bold">{title}</h3>
                </div>
            </div>
            <p className="text-sm">{description}</p>
        </div>
    );
};

export default RecommendationCard;