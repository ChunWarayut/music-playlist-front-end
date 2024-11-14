import { FC, useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { useCreateCollection } from '@/hooks/collection';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

interface CreateCollectionProps {
    isOpen: boolean;
    onClose: () => void;
    type: string;
    refetch: () => void;
}

const CreateCollection: FC<CreateCollectionProps> = ({ isOpen, onClose, type, refetch }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const { mutate: createCollection, isPending, error, isSuccess } = useCreateCollection();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        createCollection({ name, description, type, photoUrl });
        onClose();
    };

    useEffect(() => {
        refetch();
    }, [isSuccess, refetch]);

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <LoadingSpinner isLoading={isPending} />
            <ErrorMessage isError={!!error} message={error?.message || ''} />
           

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="bg-dark rounded-lg p-6 w-full max-w-md">
                    <div className="flex justify-between items-center mb-4">
                        <Dialog.Title className="text-lg font-bold text-white">
                            {type === 'playlist' ? 'สร้างเพลย์ลิสต์' :
                                type === 'podcast' ? 'สร้างรายการพอดแคสต์' :
                                    `สร้าง${type}`}
                        </Dialog.Title>
                        <X className="w-5 h-5 text-white cursor-pointer" onClick={onClose} />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">ชื่อ</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 rounded bg-dark2 text-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">รูปภาพ</label>
                            <input
                                type="text"
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)}
                                className="w-full p-2 rounded bg-dark2 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">คำอธิบาย</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full p-2 rounded bg-dark2 text-white"
                                rows={3}
                            />
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 rounded text-white hover:bg-dark2"
                            >
                                ยกเลิก
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
                            >
                                สร้าง
                            </button>
                        </div>
                    </form>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};

export default CreateCollection; 