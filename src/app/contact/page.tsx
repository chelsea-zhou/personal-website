import Link from 'next/link'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { SiSubstack } from "react-icons/si";
import Image from 'next/image';
import { IconType } from 'react-icons';

function ContactLink({ name, url, Icon }: { name: string; url: string; Icon: IconType }) {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer">
            <div className='flex gap-2'>
                <Icon size={30} />
                <p className='text-xl'>{name} </p>
            </div>
        </Link>
    )

}

export default function ContactPage() {
  const contactLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/chenshu-zhou-988488116/',
      Icon: CiLinkedin
    },
    {
      name: 'GitHub',
      url: 'https://github.com/chelsea-zhou',
      Icon: FiGithub
    },
    {
      name: 'Substack',
      url: 'https://chenshuz.substack.com',
      Icon: SiSubstack
    }
  ]

  return (
    <main className="max-w-2xl mx-auto py-12 px-4 mt-16">
      <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
      
      <div className="flex items-center gap-12">
        <div className="overflow-hidden w-[400px] h-[450px]">
            <Image 
                src="/home.jpg" 
                alt="Profile picture" 
                width={500} 
                height={500} 
                className="object-cover w-[180%] h-[130%]" 
            />
        </div>
        
        <div className="flex flex-col space-y-6">
            {contactLinks.map((link) => (
                <ContactLink key={link.name} name={link.name} url={link.url} Icon={link.Icon} />
            ))}
        </div>
      </div>
     
    </main>
  )
}
