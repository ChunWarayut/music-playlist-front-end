import { FC } from 'react';
import Image from 'next/image';

interface PlaylistHeaderProps {
  title: string;
  description: string;
  imageUrl: string;
  type: string;
}

const PlaylistHeader: FC<PlaylistHeaderProps> = ({
  title,
  description,
  imageUrl,
  type,
}) => {
  return (
    <div className="flex items-end gap-6 bg-gradient-to-b from-[#8B1F3C] to-dark p-6 w-full rounded-lg">
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          width={232}
          height={232}
          className="shadow-lg rounded"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <span className="text-sm text-white/90">{type}</span>
        <h1 className="text-7xl font-bold text-white mb-6">{title}</h1>
        <div className="flex items-center gap-2 text-sm text-white/70">
         <Image src="/spotify-logo.png" alt="Spotify" width={16} height={16} />
          <span>Spotify</span>
          <span className="text-white/70">•</span>
          <span>{description}</span>
          <span className="text-white/70">•</span>
        </div>
      </div>
    </div>
  );
};

export default PlaylistHeader; 