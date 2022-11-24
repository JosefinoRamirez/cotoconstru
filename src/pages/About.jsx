import { Galleria } from 'primereact/galleria';

import Menu from "./comps/menu";
import Footer from './comps/footer';
import Looking from "./comps/lookingCarousel";

const Card = (props) => {
    return (
        <div className="pt-24 px-16 pb-32 bg-gray-50 border-2 mb-16" style={{ width: '49%' }}>
            <img src={props.src} alt={props.alt} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

const TeamCard = (props) => {
    return (
        <>
            <div className='hidden lg:block' style={{ width: '24%' }}>
            <img src={props.src} alt={props.alt} />
            <div className="p-6">
                <h6 className="text-2xl mb-2">{props.name}</h6>
                <p className="text-xl mb-2">{props.title}</p>
                <p>{props.description}</p>
            </div>
            </div>
            <div className='w-full md:w-1/2 lg:hidden'>
                <img src={props.src} alt={props.alt} />
                <div className="p-6">
                    <h6 className="text-2xl mb-2">{props.name}</h6>
                    <p className="text-xl mb-2">{props.title}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    );
}

const itemTemplate = (item) => {
    return (
        <div className="pt-16 px-5 pb-20 bg-gray-50 border-2 mb-16 w-full flex flex-col items-center text-center">
            <img className='w-16 mb-7' src={item.imageSrc} alt={item.alt} />
            <h2 className='text-2xl mb-2'>{item.caseTitle}</h2>
            <p>{item.smallDesc}</p>
        </div>
    );
}

const About = () => {
    document.title = 'About Us';

    const images = [
        { 'imageSrc': './Icon1.png', 'alt': 'Due Diligence', 'caseTitle': 'Due Diligence', 'smallDesc': 'This service provides assurance to owners and funders that the project is feasible by assisting with the identification and analysis of risks and provide recommendations on how to mitigate them through construction planning.' },
        { 'imageSrc': './Icon2.png', 'alt': 'Profesional Construction & Architecture', 'caseTitle': 'Profesional Construction & Architecture', 'smallDesc': 'Our commitment to quality, safety, innovation, and technical expertise provides our clients and industry partners with particular assurance. In addition, our expertise, local market knowledge, and close ties to supply chains all contribute to our success.' },
        { 'imageSrc': './Icon3.png', 'alt': 'Project Management', 'caseTitle': 'Project Management', 'smallDesc': 'In the course of a project, a number of different elements need to be considered. That’s why our Project Managers will focus on good team coordination and solid collaboration between all the agents from the time a project is initiated until it is complete.' },
        { 'imageSrc': './Icon4.png', 'alt': 'Keys In Hand', 'caseTitle': 'Keys In Hand', 'smallDesc': 'We offer a comprehensive, integrated service that encompasses all project stages with a strong emphasis on quality, streamlining production and minimizing risks for timely completion.' },
    ]

    return (
        <div>
            <Menu/>
            <section className="flex flex-col items-center pt-16 md:pt-24 mb-24">
                <p className="text-center text-xl mb-6 px-8 md:px-0">WE ARE COMMITTED TO THE SUCCESS OF YOUR PROJECT</p>
                <h1 className="text-5xl md:text-6xl text-center mb-6 max-w-5xl px-8 md:px-0">Our goal is to simplify the experience of building.</h1>
                <p className="text-center mb-16 px-8 md:px-0">Coto Company exists to ensure your vision becomes a reality. We do this by solving and simplifying complex problems to help our clients build things with peace of mind.</p>
                <img src="./About.png" alt="Project" className="w-full object-cover"/>
            </section>
            <section className="flex flex-col items-center mb-16 px-8 md:px-0">
                <p className="text-center text-xl mb-6">Our services</p>
                <h1 className="text-5xl md:text-6xl text-center mb-6 max-w-4xl">We offer everything you’ll need, in one place.</h1>
                <p className="max-w-4xl text-center">From the initial concept to project closeout, we assist our clients in facilitating and coordinating the project process to mitigate complex problems. Our ability to adapt to breathtaking beauty around us has enabled us to deliver projects that exceed expectations for more than 15 years.</p>
            </section>
            <section className="hidden container mx-auto lg:flex flex-row flex-wrap justify-between max-w-7xl mb-24">
                <Card
                    src='./Icon1.png'
                    alt='Due Diligence'
                    title='Due Diligence'
                    description='This service provides assurance to owners and funders that the project is feasible by assisting with the identification and analysis of risks and provide recommendations on how to mitigate them through construction planning.'
                />
                <Card
                    src='./Icon2.png'
                    alt='Profesional Construction & Architecture'
                    title='Profesional Construction & Architecture'
                    description='Our commitment to quality, safety, innovation, and technical expertise provides our clients and industry partners with particular assurance. In addition, our expertise, local market knowledge, and close ties to supply chains all contribute to our success.'
                />
                <Card
                    src='./Icon3.png'
                    alt='Project Management'
                    title='Project Management'
                    description='In the course of a project, a number of different elements need to be considered. That’s why our Project Managers will focus on good team coordination and solid collaboration between all the agents from the time a project is initiated until it is complete.'
                />
                <Card
                    src='./Icon4.png'
                    alt='Keys In Hand'
                    title='Keys In Hand'
                    description='We offer a comprehensive, integrated service that encompasses all project stages with a strong emphasis on quality, streamlining production and minimizing risks for timely completion.'
                />
            </section>
            <Galleria 
                value={images} 
                numVisible={1} 
                circular 
                showItemNavigators 
                showThumbnails={false} 
                showItemNavigatorsOnHover 
                showIndicators 
                item={itemTemplate} 
                className='md:hidden px-8'
            />
            <section className="container mx-auto pb-32 px-8 md:px-0">
                <img src="./Goal.png" alt="Goal" className="w-full object-cover mb-24"/>
                <h1 className="text-5xl md:text-6xl text-center mb-6 max-w-4xl mx-auto">The goal is perfection.</h1>
                <p className="text-center text-xl mb-6">Our team is trained to meet the demands of construction</p>
                <p className="max-w-xl text-center mx-auto">By combining our construction industry knowledge, business experience, and legal experience, we can help you avoid costly and time-consuming construction problems. Our construction consulting experts work personally with each client throughout the duration of the project to ensure that clients meet their project goals and budgets.</p>
            </section>
            <section className='flex flex-col items-center bg-gray-50 pt-24 pb-32 px-8 md:px-0'>
                <h3 className='text-2xl'>Meet our leadership</h3>
                <h4 className='text-4xl mb-8 text-center'>More than 22 years of experience</h4>
                <div className='flex flex-col md:flex-row justify-between w-full max-w-7xl'>
                    <TeamCard
                        src='./Coto.png'
                        name='ADRIÁN COTO'
                        title='FOUNDER'
                        description='A civil engineer with twenty-two years of experience in the construction business, building luxury and high-end finishing houses in the world-wide market'
                    />
                    <TeamCard
                        src='./Coto.png'
                        name='ADRIÁN COTO'
                        title='FOUNDER'
                        description='A civil engineer with twenty-two years of experience in the construction business, building luxury and high-end finishing houses in the world-wide market'
                    />
                    <TeamCard
                        src='./Coto.png'
                        name='ADRIÁN COTO'
                        title='FOUNDER'
                        description='A civil engineer with twenty-two years of experience in the construction business, building luxury and high-end finishing houses in the world-wide market'
                    />
                    <TeamCard
                        src='./Coto.png'
                        name='ADRIÁN COTO'
                        title='FOUNDER'
                        description='A civil engineer with twenty-two years of experience in the construction business, building luxury and high-end finishing houses in the world-wide market'
                    />
                </div>
            </section>
            <Looking/>
            <Footer/>
        </div>
    );
}

export default About;
