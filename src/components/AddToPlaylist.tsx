import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Search, X } from 'lucide-react';
import { useMusics } from '@/hooks/music';
import { Music } from '@/types/music';
import { useCreateItem } from '@/hooks/item';

interface AddToPlaylistProps {
    isOpen: boolean;
    onClose: () => void;
    collectionId: string;
    refetch: () => void;
}

const AddToPlaylist: FC<AddToPlaylistProps> = ({ isOpen, onClose, collectionId, refetch }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const { data: musics } = useMusics();
    const { mutate: createItem, isSuccess } = useCreateItem();

    useEffect(() => {
        refetch();
    }, [isSuccess, refetch]);

    const searchResults: Music[] = musics
        ? musics.filter((track: Music) =>
            track.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            track.artist.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/90 z-50">
            <div className="max-w-2xl mx-auto pt-16 px-4">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-white">
                            มาค้นหาเพลงสำหรับเพลย์ลิสต์ของคุณกัน
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-white/70 hover:text-white"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="ค้นหาเพลงหรือตอนพอดแคสต์"
                            className="w-full bg-white/10 text-white placeholder:text-white/70 py-3 pl-11 pr-4 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                <X className="h-5 w-5 text-white/70 hover:text-white" />
                            </button>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        {searchResults.map((track) => (
                            <div
                                key={track.id}
                                className="flex items-center justify-between p-2 hover:bg-white/10 rounded-md group"
                            >
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={track.photoUrl ?? ''}
                                        alt={track.name}
                                        width={40}
                                        height={40}
                                        className="rounded"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-white">{track.name}</span>
                                        <span className="text-sm text-white/70">{track.artist}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => createItem({
                                        collectionId: collectionId,
                                        album: track.album,
                                        artist: track.artist,
                                        name: track.name,
                                        photoUrl: track.photoUrl,
                                    })}
                                    className="px-4 py-1 rounded-full bg-white text-black font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    เพิ่ม
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToPlaylist; 