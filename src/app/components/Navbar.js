import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <>
        <nav className="flex space-x-6 p-20">
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>
                <Link href="/blog">Blog</Link>
            </div>
        </nav>
        </>
    );
};

export default Navbar;