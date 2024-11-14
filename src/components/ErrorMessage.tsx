import React from 'react';

const ErrorMessage: React.FC<{ message: string, isError: boolean }> = ({ message, isError }) => (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 ${isError ? 'visible' : 'hidden'}`}>
        <p className="text-white">{message}</p>
    </div>
);

export default ErrorMessage; 