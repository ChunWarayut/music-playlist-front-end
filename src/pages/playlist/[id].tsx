import { useParams } from "next/navigation";

const PlaylistPage = () => {
    const params = useParams();
    return <div>PlaylistPage {params?.id}</div>;
};

export default PlaylistPage;