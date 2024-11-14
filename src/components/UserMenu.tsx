import React from 'react';
import Image from 'next/image';

const UserMenu = () => {
    return (
        <div className="flex items-center space-x-4 justify-end">
            <button className="bg-gray-500 rounded-full h-8 w-8">
                <Image src="/avatar.png" alt="Avatar" width={32} height={32} className="rounded-full" />
            </button>
        </div>
    );
};

export default UserMenu; 