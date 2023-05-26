import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="w-full fixed z-40">
            <div className={`px-4 py-4 flex justify-center items-center bg-[#392a56] border-[#65386f] border-[1.5px] border-opacity-40`}>
                <div className='text-white text-xl flex justify-center gap-[5rem] items-center'>
                    <Link href="/">LISTA PRZEPISÓW</Link>
                    <Link href="/addrecipe">DODAJ PRZEPIS</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;