import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
import Layout from "@/components/layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Listado de Pokémon">
      <h1>Hola Mundo x3</h1>
      <Button variant="ghost" color="secondary">
        Botón
      </Button>
      <div className="dark dark:bg-gray-800 dark:text-white bg-white text-black">
        ...
        <div>Text color changes based on theme</div>
      </div>

      <div className="light light:bg-gray-100 light:text-black bg-black text-white">
        ...
        <div>Text color changes based on theme</div>
      </div>
    </Layout>
  );
}
