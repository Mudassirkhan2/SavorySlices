import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="flex items-center  justify-between">
            <Link className="text-primary font-semibold text-2xl" href={'/'}>
                ST PIZZA
            </Link>
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link href={'/'}>Home</Link>
                <Link href={'/menu'}>Menu</Link>
                <Link href={'/#about'}>About</Link>
                <Link href={'/#contact'}>Contact</Link>
            </nav>
        </header>
    )
}

export default Header
