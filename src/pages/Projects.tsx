import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Link from '@mui/joy/Link'

import { SiTypescript, SiTailwindcss, SiReact, SiGithub } from "react-icons/si";
import { RxDividerVertical } from "react-icons/rx";
import { FaSquareArrowUpRight } from "react-icons/fa6";

import { Button } from '@mui/joy';

import { motion } from "framer-motion";

function ProjectCard(param){
    return (
        <Card variant="outlined">
            <CardOverflow>
                <AspectRatio ratio="2">
                {param.inCardContent}
                </AspectRatio>
            </CardOverflow>
            <CardContent>
                <Typography level="title-md">{param.name}</Typography>
                <Typography level="body-sm" variant="soft">{param.languages}</Typography>
                <Typography level="body-sm">{param.description}</Typography>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                <Button color="neutral" variant="solid">
                    {param.button}
                </Button>
                <Divider orientation="vertical" />
                <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                    1 hour ago
                </Typography>
                </CardContent>
            </CardOverflow>
        </Card>
    );
}

const Projects = () => {
    return (
        <motion.main
        className="main__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 1.5 }} >
            
            <div className='flex flex-col items-center h-full'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-stretch w-[92vw] max-w-[1500px]'>
                    <ProjectCard name="Personal Portfolio Site" 
                        languages=
                        <a className='flex flex-row items-center justify-left'>
                            <SiReact/> React 
                            <RxDividerVertical />
                            <SiTypescript/> Typescript
                            <RxDividerVertical />
                            <SiTailwindcss/> TailwindCSS
                        </a>
                        description = "Porfolio site showcasing my work based on React and TailwindCSS with the help of a few other libraries."
                        button = <SiGithub/>
                        inCardContent = <div className='bg-sky-300'> <Link href="#basics">Link</Link> <FaSquareArrowUpRight/> </div>
                    />
                </div>  
            </div>
        </motion.main>
    );
};

export default Projects;
