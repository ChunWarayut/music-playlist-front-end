import { Home, List, Search } from 'lucide-react';
import Link from 'next/link';

const SearchBar = () => {
    return (
        <div className="bg-black text-white flex items-center p-2 rounded-full w-full">
            <Link href="/">
                <Home className="text-white mx-2 bg-dark rounded-full p-2 w-12 h-12 cursor-pointer" />
            </Link>
            <div className="flex items-center bg-dark rounded-full flex-grow mx-2 p-2">
                <Search className="text-white mx-2 cursor-pointer" />
                <input
                    type="text"
                    placeholder="เล่นอะไรดี"
                    className="bg-transparent text-white flex-grow px-2 py-1 focus:outline-none"
                />
                <List className="text-white mx-2 cursor-pointer" />
            </div>
        </div>
    );
};

export default SearchBar; 