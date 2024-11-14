import Image from 'next/image';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-black text-white grid grid-cols-3 items-center p-4 min-h-[100px]">
            <Link href="/">
                <Image src="/spotify-logo.png" alt="Logo" width={32} height={32} className="rounded-full p-2 w-12 h-12 cursor-pointer" />
            </Link>
            <div className="flex items-center space-x-4">
                <SearchBar />
            </div>
            <UserMenu />
        </nav>
    );
};

export default Navbar;