import Link from 'next/link';
import React from 'react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 container mx-auto py-12 px-4">
            <h2 className="header-text text-4xl font-extrabold text-blue-800 mb-4 tracking-tight">
                404 - Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
                Could not find the requested resource. The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow-md hover:bg-blue-700 transition"
            >
                Return Home
            </Link>
        </div>
    );
}
