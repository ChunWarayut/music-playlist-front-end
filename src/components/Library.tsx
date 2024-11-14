import { FC, useState } from 'react';
import { List, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCollection } from '@/hooks/collection';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';
import CreateCollection from './CreateCollection';

const Library: FC = () => {
    const params = useParams();
    const [type, setType] = useState<string>('playlist');
    const { data, isLoading, error, refetch } = useCollection(type);
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    return (
        <div className="flex flex-col bg-black w-fit px-2">
            <div className="bg-dark text-white w-full h-full p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-lg font-bold">คอลเลกชันของคุณ</h1>
                    <div className="flex space-x-2">
                        <Plus 
                            className="w-5 h-5 cursor-pointer hover:text-gray-300" 
                            onClick={() => setIsCreateOpen(true)}
                        />
                        <List className="w-5 h-5" />
                    </div>
                </div>
                <div className="flex space-x-2 mb-4">
                    <button onClick={() => setType('playlist')} className="bg-dark2 text-white px-3 py-1 rounded-full text-nowrap">เพลย์ลิสต์</button>
                    <button onClick={() => setType('artist')} className="bg-dark2 text-white px-3 py-1 rounded-full text-nowrap">ศิลปิน</button>
                    <button onClick={() => setType('album')} className="bg-dark2 text-white px-3 py-1 rounded-full text-nowrap">อัลบั้ม</button>
                    <button onClick={() => setType('podcast')} className="bg-dark2 text-white px-3 py-1 rounded-full text-nowrap">พอดแคสต์และรายการ</button>
                </div>
                <div className="space-y-0">
                    {data?.map((item, index) => (
                        <Link key={index} href={`/playlist/${item.id}`} className={`flex items-center p-2 rounded-lg ${item.id === params?.id ? 'bg-dark2' : ''}`}>
                            <Image src={item.photoUrl || ''} alt={item.name} width={40} height={40} className="rounded-sm mr-3" />
                            <div>
                                <p className="text-sm font-bold">{item.name}</p>
                                <p className="text-xs text-gray-400">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <CreateCollection 
                isOpen={isCreateOpen} 
                onClose={() => setIsCreateOpen(false)}
                type={type}
                refetch={refetch}
            />
            <LoadingSpinner isLoading={isLoading} />
            <ErrorMessage message="เกิดข้อผิดพลาดในการโหลดข้อมูล" isError={!!error} />
        </div>
    );
};

export default Library; 