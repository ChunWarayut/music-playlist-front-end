import { FC } from 'react';
import { List, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const items = [
    {
        id: 1,
        type: 'playlist',
        title: 'เพลงที่ถูกใจ',
        description: 'เพลย์ลิสต์ • 22 เพลง',
        image: '/images/image.jpg',
    },
    {
        id: 2,
        type: 'playlist',
        title: 'เพลย์ลิสต์ของฉัน #5',
        description: 'เพลย์ลิสต์ • Warayut Taekrathok',
        image: '/images/image1.jpg',
    },
    {
        id: 3,
        type: 'podcast',
        title: 'ค่านิยม',
        description: 'พอดแคสต์ • THE STANDARD',
        image: '/images/image2.jpg',
    },
];

const Library: FC = () => {
    const params = useParams();
    return (
        <div className="flex flex-col bg-black w-fit px-2">
            <div className="bg-dark text-white w-full h-full p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-lg font-bold">คอลเลกชันของคุณ</h1>
                    <div className="flex space-x-2">
                        <Plus className="w-5 h-5" />
                        <List className="w-5 h-5" />
                    </div>
                </div>
                <div className="flex space-x-2 mb-4">
                    <button className="bg-dark2 text-white px-3 py-1 rounded-full text-nowrap">เพลย์ลิสต์</button>
                    <button className="bg-dark2 text-white px-3 py-1 rounded-full text-nowrap">ศิลปิน</button>
                    <button className="bg-dark2 text-white px-3 py-1 rounded-full text-nowrap">อัลบั้ม</button>
                    <button className="bg-dark2 text-white px-3 py-1 rounded-full text-nowrap">พอดแคสต์และรายการ</button>
                </div>
                <div className="space-y-0">
                    {items.map((item, index) => (
                        <Link key={index} href={`/playlist/${item.id}`} className={`flex items-center p-2 rounded-lg ${item.id === parseInt(params?.id?.toString() || '') ? 'bg-dark2' : ''}`}>
                            <Image src={item.image || ''} alt={item.title} width={40} height={40} className="rounded-sm mr-3" />
                            <div>
                                <p className="text-sm font-bold">{item.title}</p>
                                <p className="text-xs text-gray-400">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Library; 