import Image from "next/image";
import { Select } from "flowbite-react";

function Header() {
  return (
    <header
      className="
      bg-white
        mb-3
        flex
        w-screen
        justify-center
        shadow-sm
        shadow-generator-primary
      "
    >
      <div className="flex h-14 w-full items-center justify-between p-8  md:h-20 md:w-1/2 md:p-0">
        <div>
          <Image
            src="/images/logo.png"
            width={150}
            height={70}
            quality={50}
            alt={"logo"}
          />
        </div>
        <div className="border-generator-primary font-primary text-generator-primary">
          <Select required className="text-xs text-generator-primary">
            <option selected>es</option>
            <option>en</option>
            <option>fr</option>
            <option>it</option>
          </Select>
        </div>
      </div>
    </header>
  );
}

export default Header;
