import { FC } from 'react';
import RecommendationCard from './RecommendationCard';

const recommendations = [
    {
        title: 'เบิร์ด ธงไชย',
        description: 'กับ แจ๊ส ดนุพล, แก้วกาญจน์, เจ เจตริน, กบ ทรงสิทธิ์ และอีกมาก',
        imageUrl: '/images/image1.jpg',
    },
    {
        title: 'เครสเซนโด้',
        description: 'กับ อีทีซี, มัสเตอร์ทีม, บอย โกสิยพงษ์ และอีกมาก',
        imageUrl: '/images/image2.jpg',
    },
    {
        title: 'เบิร์ด ธงไชย',
        description: 'กับ แจ๊ส ดนุพล, แก้วกาญจน์, เจ เจตริน, กบ ทรงสิทธิ์ และอีกมาก',
        imageUrl: '/images/image1.jpg',
    },
    {
        title: 'เครสเซนโด้',
        description: 'กับ อีทีซี, มัสเตอร์ทีม, บอย โกสิยพงษ์ และอีกมาก',
        imageUrl: '/images/image2.jpg',
    },
    {
        title: 'เบิร์ด ธงไชย',
        description: 'กับ แจ๊ส ดนุพล, แก้วกาญจน์, เจ เจตริน, กบ ทรงสิทธิ์ และอีกมาก',
        imageUrl: '/images/image1.jpg',
    },
    {
        title: 'เครสเซนโด้',
        description: 'กับ อีทีซี, มัสเตอร์ทีม, บอย โกสิยพงษ์ และอีกมาก',
        imageUrl: '/images/image2.jpg',
    },
    {
        title: 'เบิร์ด ธงไชย',
        description: 'กับ แจ๊ส ดนุพล, แก้วกาญจน์, เจ เจตริน, กบ ทรงสิทธิ์ และอีกมาก',
        imageUrl: '/images/image1.jpg',
    },
    {
        title: 'เครสเซนโด้',
        description: 'กับ อีทีซี, มัสเตอร์ทีม, บอย โกสิยพงษ์ และอีกมาก',
        imageUrl: '/images/image2.jpg',
    },

];

const RecommendationList: FC<{ title: string }> = ({ title }) => {
    return (
        <div className="w-full max-w-[calc(100vw-500px)] overflow-x-scroll mb-8">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex space-x-4 overflow-x-scroll p-4">
                {recommendations.map((rec, index) => (
                    <RecommendationCard
                        key={index}
                        title={rec.title}
                        description={rec.description}
                        imageUrl={rec.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecommendationList;