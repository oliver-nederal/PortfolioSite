

const Home = () => {
    return (
        <div className='flex flex-col scroll-smooth'>
            <div className='flex w-full h-full justify-between content-center'>
                {/*Container*/}
                <div className='max-w-[1000px] mx-auto flex flex-row justify-between h-full'>
                    <div className='mx-auto max-w-[700px] px-8 flex flex-col justify-center h-full'>
                        <h2 className='text-fit font-medium my-10'>student by day, programmer by night</h2>
                        <p className='text-fit'>By day, I'm a dedicated student, always hungry for knowledge. But as soon as the books close, I become a coding enthusiast. As a programmer, I unleash my creativity, crafting elegant solutions and pushing boundaries. From web applications to simple algorithms and applications, I thrive on bringing ideas to life through code. With a thirst for challenge, I've embarked on personal projects and collaborated with fellow developers, constantly honing my skills and embracing new technologies. I thrive in diverse teams, where collaboration fuels innovation. This portfolio showcases my work, skills, and journey.</p>
                        <p className='my-10'>Ready to make something amazing together? <a className='text-blue-500 underline'>Reach out</a> and let's create the future.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home