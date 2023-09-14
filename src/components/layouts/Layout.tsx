import Head from "next/head";
import React from "react";

interface LayoutTypes {
  children: React.ReactNode;
  title?: string;
}

const Layout = ({ children, title }: LayoutTypes) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}p</title>
        <meta name="Author" content="Jorge Gonzalez" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      {/* Navbar */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
