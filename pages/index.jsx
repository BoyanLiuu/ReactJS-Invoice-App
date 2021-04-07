import Head from 'next/head';
import FilterBar from '../components/Home/FilterBar';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main>
                <FilterBar />
            </main>
        </div>
    );
}
