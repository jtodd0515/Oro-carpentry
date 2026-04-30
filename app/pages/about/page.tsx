import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 bg-auto dark:bg-black font-sans opacity-75">
      <h1 className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">Who We Are</h1>
      <p className="text-2xl text-gray-600 dark:text-gray-400">Welcome to Oro Carpentry! We are a carpentry company based in Burlington, NC and serving Greensboro, Carrboro, and the Triangle.</p>
      <Image src="/oroLogo.jpg" alt="Oro Carpentry Logo" width={400} height={400} className="mt-8" />
    </div>
  );
}
