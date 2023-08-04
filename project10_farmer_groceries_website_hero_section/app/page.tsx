import Image from "next/image";
export default function Home() {
  return (
    <main className="px-6 relative">
      <div className="relative xl:pb-40">
        <div className="text-white mt-10 xl:mt-40 max-w-full text-center xl:text-left xl:max-w-2xl">
          <h1 className="text-6xl font-semibolds leading-normal">
            Groceries <br />
            Delivered in{" "}
            <span className="font-light text-yellow-200">15 minutes.</span>
          </h1>
          <p>
            Welcome to our grocery delivery service, where fresh produce and
            everyday essentials are just a click away, delivered straight to
            your doorstep with convenience and care.
          </p>
          <div className="mt-10 flex gap-5 justify-center xl:justify-normal">
            <a
              href="#"
              className="bg-yellow-200 rounded-md py-3 px-8 font-medium inline-block text-black hover:bg-transparent hover:border-yellow-200 border-2 hover:text-white transition-all duration-300"
            >
              Order Now
            </a>
            <a
              href="#"
              className="bg-transparent text-white rounded-md py-3 px-8 font-medium inline-block  hover:bg-transparent hover:border-yellow-200 border-2 hover:text-white transition-all duration-300"
            >
              Download App{" "}
            </a>
          </div>
        </div>
        <Image
          src="/assets/images/grocery-image.png"
          width={930}
          height={900}
          alt="decoration hero image"
          className="w-full xl:absolute xl:w-1/2 bottom-0 right-0"
        />
      </div>
    </main>
  );
}
