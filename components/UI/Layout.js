import Navbar from '@/components/UI/Navbar';
import Head from 'next/head';

function Layout(props) {
    return (
        <>
            <Navbar />
            <div className="relative h-[60rem] w-full bg-no-repeat bg-fixed bg-cover">
                <div>
                    <main className='relative top-[5rem] '>{props.children}</main>
                </div>
            </div>
        </>
    );
}

export default Layout