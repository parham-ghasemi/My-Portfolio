import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import './globals.css';
import { FloatingNav } from '@/components/ui/NavBar';
import { FaHome } from 'react-icons/fa';

export default function Home() {
   return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
         <div className="max-w-7xl w-full">
            <FloatingNav navItems={[ 
               {name: 'About', link:'/', icon:<FaHome/>},
               {name:'Projects', link:'/', icon:<FaHome/>},
               {name:'Contact', link:'/', icon:<FaHome/>}
             ]} />
            <Hero />
            <Grid />
         </div>
      
      </main>
     );
}
