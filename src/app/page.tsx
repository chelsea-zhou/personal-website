import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-4xl font-bold">Nice to meet you, I'm Chenshu.Z</h1>
      <p className="text-lg max-w-2xl text-center sm:text-left">
          I like writing, in code, in English, and in Chinese. <br />
          I create things that help us better understand ourselves, make sense of the world, and connect with others. <br />
        </p>
        <Image
            src="/typewriter.jpg"  
            alt="Profile picture"
            width={500}
            height={500}
            className="object-cover object-center w-full h-[600px]"
          />  
         
      </main>
    </div>
  );
}