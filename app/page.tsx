import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col flex-1 items-center justify-center bg-zinc-50 opacity-65 font-sans dark:bg-black" >
      <main className="flex flex-1 max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className=""
          src="/oroLogo.jpg"
          alt="Oro Carpentry Logo"
          width={650}
          height={650}
          priority
        />
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <h1 className=" max-w-xl text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Oro-Carpentry
          </h1>
          <p className="max-w-md text-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            Please visit our {" "}
            <a
              href="https://www.facebook.com/people/Oro-Carpentry/100090055420183/"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Facebook
            </a>{" "}
            
          </p>
        </div>
      </main>
    </div>
  );
}
