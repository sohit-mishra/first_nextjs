import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-full max-w-7xl justify-center">
        {/* Image (First on Mobile, Last on Desktop) */}
        <div className="flex justify-center items-center w-full sm:w-1/2 order-1 sm:order-last">
          <Image
            className="object-cover w-full h-auto rounded-lg"
            src="/about.svg"
            alt="About Image"
            width={500}
            height={300}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold mb-4">Hi, Welcome!</h1>
          <p className="text-gray-700 leading-relaxed max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sunt non ipsam deserunt
            repellendus consequuntur sequi, ex assumenda! Natus itaque ipsam dignissimos sapiente explicabo,
            harum accusantium velit, eaque architecto repudiandae quasi a. Voluptatum, in ea incidunt eligendi
            dolorem, autem quae architecto magni sit voluptatem obcaecati quos eum cum culpa nam, numquam
            ratione enim...
          </p>
        </div>
      </div>
    </div>
  );
}
