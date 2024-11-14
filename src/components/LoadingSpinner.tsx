import React from 'react';

const LoadingSpinner: React.FC<{ isLoading: boolean }> = ({ isLoading }) => (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 ${isLoading ? 'visible' : 'hidden'}`}>
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
    </div>
);

export default LoadingSpinner; 