import Image from "next/image";

function BlogCard({ language, title, description, img, link }: { language: string; title: string; description: string; img: string; link: string }) {
    return (

            <div className="space-y-4">
                <h2 className="text-xl font-bold mb-2">{language}</h2>
                <a 
                    href={link} 
                    className="text-xl text-blue-600 hover:text-blue-800 transition-colors"
                >
                <div className="flex flex-col items-start space-y-4">
                    <Image 
                        src={img} 
                        alt={description} 
                        width={400} 
                        height={300} 
                        className="rounded-lg object-cover w-full h-[300px]"
                    />
                    <span className="text-xl text-blue-600">
                        {title}
                    </span>
                </div>
                </a>
            </div>
      
    );
}

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-8 mt-16 max-w-5xl">
            <h1 className="text-3xl font-bold mb-8">Blog</h1>
            <p className="text-xl mb-2">
                I write biweekly essays on my thoughts and learnings, as a way to memoize through life's dynamic problems.
            </p>

            <div className="flex flex-col gap-20 mt-12 max-w-3xl">
                <BlogCard 
                    language="English"
                    title="Letters from far away" 
                    description="English blog" 
                    img="/quill.jpg" 
                    link="https://chenshuz.substack.com/" 
                />

                <BlogCard 
                    language="Chinese"
                    title="远方来信" 
                    description="Chinese blog" 
                    img="/calligraphy.jpg" 
                    link="https://chenshuz.blog/" 
                />
            </div>
        </div>
    );
}