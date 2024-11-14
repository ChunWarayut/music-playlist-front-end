import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";
import PlaylistHeader from "@/components/PlaylistHeader";
import PlaylistTracks from "@/components/PlaylistTracks";
import { useCollectionById } from "@/hooks/collection";
import { useItems } from "@/hooks/item";
import { useParams } from "next/navigation";

const PlaylistPage = () => {
    const params = useParams();
    const { data: collection, isLoading, error } = useCollectionById(params?.id as string);
    const { data: items, refetch } = useItems(params?.id as string);
    return (
        <div className="bg-black w-full">
            <PlaylistHeader
                title={collection?.name || ''}
                description={collection?.description || ''}
                imageUrl={collection?.photoUrl || ''}
                type={collection?.type || ''}
            />
            <PlaylistTracks tracks={items || []} collectionId={params?.id as string} refetch={refetch} />
            <LoadingSpinner isLoading={isLoading} />
            <ErrorMessage isError={!!error} message={error?.message || ''} />
        </div>
    );
};

export default PlaylistPage;