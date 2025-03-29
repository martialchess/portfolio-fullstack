import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
    children: React.ReactNode;
};

const Container = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                <div className="max-w-6xl mx-auto px-4 py-10">
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Container;