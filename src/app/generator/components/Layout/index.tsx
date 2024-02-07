import { ReactNode } from "react";
import { ThemeModeScript } from "flowbite-react";
import Header from "../../components/Header";

interface Props {
  children: JSX.Element | ReactNode | string;
}

function index({ children }: Props) {
  return (
    <html>
      <head>
        <ThemeModeScript />
        <title>Generador de qr</title>
      </head>
      <body>
        <main className="w-lvw flex min-h-screen flex-col ">
          <Header />
          <div className=" w-lvw flex justify-center">
            <div className="x hidden md:flex">add</div>
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
      </body>
    </html>
  );
}

export default index;
