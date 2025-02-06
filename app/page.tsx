import Image from "next/image";
import Link from "next/link"; 

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-full max-w-7xl justify-center">
       
        <div className="flex justify-center items-center w-full sm:w-1/2 order-1 sm:order-last">
          <Image
            className="object-cover w-full h-auto rounded-lg"
            src="/Home.svg"
            alt="Home Image"
            width={500}
            height={300}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left">
          <h1 className="text-3xl font-semibold mb-4">Hi, Welcome!</h1>
          <p className="text-gray-700 leading-relaxed max-w-2xl mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt non ipsam deserunt
            repellendus consequuntur sequi.
          </p>
          
         
          <Link href="/drashboard">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
              Let go
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
