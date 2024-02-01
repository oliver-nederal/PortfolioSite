import Highlight from 'react-highlight'
import Divider from '@mui/joy/Divider';

import { motion } from "framer-motion";

const Home = () => {

    return (
        <motion.main
            className="main__container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 1.5 }}>

            <div className='flex flex-col items-center scroll-smooth'>
                <div className='flex w-[92vw] h-[75vh] justify-between content-center'>
                    {/*Container*/}
                    <div className='max-w-[1500px] flex flex-row h-full'>
                        <div className='mx-auto flex flex-col justify-center h-full'>
                            <Highlight className='sm:text-xs md:text-base py-[1vh]' language="python">
                                {`#Hello World!
    #My name is Oliver Nederal, 
    I am a student and developer.

    def me(self):
        self.firstName = "Oliver"
        self.lastName = "Nederal"

        self.email = "oliver@nederal.com"
        self.phoneNumber = "(+420)792-413-222"
        
        self.nationality = ["SE", "RS"]
        self.currentLocation = "Prague, CZ"
        
        self.proffession = "Student"
        self.hobbies = [
            "Programming", 
            "Designing", 
            "Aviation"
        ]
        
        self.openToBusiness = True`}
                            </Highlight>
                        </div>
                    </div>

                    <Divider orientation="vertical" />

                    <p>Lorem Ipsum dolor sit amet</p>
                </div>
            </div>
        </motion.main>
    )
}

export default Home