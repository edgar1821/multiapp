import Image from "next/image";
import { Dropdown } from "flowbite-react";

function Header() {
  return (
    <header
      className="
    bg-white
     mb-3
    flex
    justify-center
    shadow-sm
    shadow-generator-primary
    "
    >
      <div className="bg-generator-white-100 flex h-14 w-full items-center justify-between p-8 md:w-1/2 md:p-0">
        <div>
          <Image
            src="/images/logo.png"
            width={150}
            height={70}
            quality={50}
            alt={"logo"}
          />
        </div>
        <div>
          <h1 className="font-primary text-generator-primary">
            idioma
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
