import { FC } from 'react';
import RecommendationList from './RecommendationList';

const menuItems = [
    { id: 1, title: 'ทั้งหมด', isActive: true },
    { id: 2, title: 'เพลง' },
    { id: 3, title: 'พอดแคสต์' },
];

const MainContent: FC = () => {
    return (
        <div className="flex-1 bg-gradient-to-b from-green-700 to-black text-white p-4 rounded-lg">
            <div className="mb-8">
                <div className="flex space-x-2 mb-8">
                    {menuItems.map((item) => (
                        <button key={item.id} className={`px-3 py-1 rounded-full text-nowrap ${item.isActive ? 'bg-white text-black' : 'bg-dark2 text-white opacity-90'}`}>
                            {item.title}
                        </button>
                    ))}
                </div>
                <div className="space-y-8 overflow-y-scroll h-[calc(100vh-300px)]">
                    <RecommendationList title="คอลเลกชันของฉัน" />
                    <RecommendationList title="เพลงฮิตวันนี้" />
                    <RecommendationList title="ศิลปินฮิตวันนี้" />
                </div>
            </div>
        </div>
    );
};

export default MainContent;