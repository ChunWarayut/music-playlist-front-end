import { FC, useState } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Item } from '@/types/item';
import AddToPlaylist from './AddToPlaylist';

interface PlaylistTracksProps {
    tracks: Item[];
    collectionId: string;
    refetch: () => void;
}

const PlaylistTracks: FC<PlaylistTracksProps> = ({ tracks, collectionId, refetch }) => {
    const [isAddTrackOpen, setIsAddTrackOpen] = useState(false);

    return (
        <div className="px-6 pt-6">
            <div className="flex justify-end mb-4">
                <button onClick={() => setIsAddTrackOpen(true)} className="flex items-center gap-2 text-sm text-white/70">
                    <Plus className="h-4 w-4" /> เพิ่มเพลง
                </button>
            </div>
            <div className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-2 text-sm text-white/70 border-b border-white/10">
                <div>#</div>
                <div>ชื่อ</div>
                <div>อัลบั้ม</div>
            </div>

            <div className="flex flex-col">
                {tracks.map((track, index) => (
                    <div
                        key={track.id}
                        className="grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-2 text-sm text-white/70 hover:bg-white/10 rounded-md group"
                    >
                        <div className="flex items-center">{index + 1}</div>
                        <div className="flex items-center gap-3">
                            <Image
                                src={track.photoUrl || ''}
                                alt={track.name || ''}
                                width={40}
                                height={40}
                                className="rounded"
                            />
                            <div className="flex flex-col">
                                <span className="text-white">{track.name || ''}</span>
                                <span>{track.artist}</span>
                            </div>
                        </div>
                        <div className="flex items-center">{track.album}</div>
                        <div></div>
                    </div>
                ))}
            </div>

            <AddToPlaylist
                isOpen={isAddTrackOpen}
                onClose={() => setIsAddTrackOpen(false)}
                collectionId={collectionId}
                refetch={refetch}
            />
        </div>
    );
};

export default PlaylistTracks; 