import { GrProjects, GrContact, GrGithub } from "react-icons/gr";
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton'

import { motion } from "framer-motion";

const Home = () => {
    return (
        <motion.main
            className="main__container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 1.5 }}>

            <div className='flex h-[75vh]'>
                <div className='mx-auto px-6 flex flex-col justify-center h-full'>
                    <p className='text-xl text-gray-500'>Hi, my name is</p>
                    <span className="inline-flex items-baseline">                    
                        <img className='self-center rounded-full h-[16vh] md:h-[7vh] mr-2' src="https://picsum.photos/200/200?random" loading="eager" alt=""/>
                        <span className='text-6xl text-black font-semibold justify-self-start'>Oliver Nederal</span>
                    </span>         
                    <h2 className='text-3xl text-gray-700'>student, developer</h2>
                    <p className='text-gray-500 py-4 max-w-[700px]'>Fullstack Developer</p>

                    <div className='flex gap-x-2'>
                        <ButtonGroup aria-label="outlined primary button group" size="lg">
                            <Button endDecorator={<GrProjects />} onClick={() => {window.location.href='/projects';}}>Projects</Button>
                            <Button endDecorator={<GrContact />} color="success" onClick={() => {window.location.href='/contact';}}>Contact</Button>
                        </ButtonGroup>
                        <ButtonGroup aria-label="outlined primary button group" size="lg">
                            <IconButton>
                                <GrGithub onClick={() => {window.location.href='https://github.com/Pilot-64';}}/>
                            </IconButton>
                        </ButtonGroup>
                    </div>
                </div>
            </div>   

        </motion.main>  
    )
}

export default Home