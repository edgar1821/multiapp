import Header from "./components/Header";
function index() {
  return (
    <main className="flex min-h-screen w-lvw flex-col ">
      <Header />
      <div className=" flex w-lvw justify-center">
        <div className="bg-indigo-500 hidden md:flex">add</div>
        <div
          className="
        bg-generator-white-100 
        ml-0 
        mr-0 
        flex 
        w-full
        justify-center
        rounded-lg 
        border-2 
        border-generator-primary
        md:ml-10
        md:mr-10
        md:w-1/2"
        >
          body
        </div>
        <div className="bg-indigo-500 hidden md:flex">add</div>
      </div>
    </main>
  );
}

export default index;
