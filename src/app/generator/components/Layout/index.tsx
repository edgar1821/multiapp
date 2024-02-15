// import { ThemeModeScript } from "flowbite-react";
import { Metadata } from "next";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: "Generador de qr gratis gratis",
};
function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="w-lvw flex min-h-screen flex-col ">
        <div className=" w-lvw flex justify-center">
          <div className="hidden bg-indigo-500 md:flex">add</div>
          <div
            className="
                ml-0 
                mr-0 
                flex 
                w-full 
                justify-center
                rounded-lg
                border-2 
                border-generator-primary 
                bg-generator-white-100
                md:ml-10
                md:mr-10
                md:w-1/2"
          >
            {children}
          </div>
          <div className="hidden bg-indigo-500 md:flex">add</div>
        </div>
      </main>
    </div>
  );
}

export default RootLayout;
