import Layout from '../../components/Layout'

const LandingPage = () => {
    return(
        <Layout>
            <div className="flex flex-col bg-white text-black dark:bg-black dark:text-white">
                <div className='text-2xl md:text-4xl lg:text-5xl xl:text-9xl font-black px-6 md:px-10 lg:px-14'>
                    <h3 className='text-black dark:text-white text-lg md:text-2xl lg:text-3xl xl:text-5xl mb-2'>Hello</h3>
                    <h1 className='text-[#EBB88C] font-bold text-4xl md:text-5xl lg:text-6xl xl:text-9xl mb-4 '>I'am Qolby Latifah</h1>
                    <h3 className='text-black dark:text-white text-xs md:text-lg lg:text-xl xl:text-2xl font-bold bg-[#EBB88C] p-2 px-4 rounded-lg w-max'>
                    A Web Developer
                    </h3>
                </div>
            </div>
        </Layout>
    )
}

export default LandingPage;