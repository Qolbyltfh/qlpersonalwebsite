import React from "react";
import Layout from "../components/Layout";
import logoVOC from '../assets/images/logo-smk1-removebg-preview.png';
import logoBinus from '../assets/images/logo-binus-removebg-preview.png';

const Resume = () => {
    const education = [
        {
            id: 0,
            name: 'SMK Negeri 1 Cimahi',
            departement: 'Computer Software Engineering',
            start: '2015',
            end: '2019',
            gpa: null,
            desc: '4 years program',
            image: logoVOC
        },
        {
            id: 1,
            name: 'Bina Nusantara University',
            departement: 'Bachelor of Computer Science, Informatics',
            start: '2020',
            end: '2024',
            gpa: '3.69',
            desc: 'online class',
            image: logoBinus
        },
    ]

    return (
        <Layout>
            <div className="py-10 md:px-32">
                <div className="flex items-center">
                    <div className="border-4 border-[#EBB88C] h-9 mr-4"></div>
                    <div className="dark:text-white text-4xl font-bold">Resume</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="p-4">
                        <div className="dark:text-white text-2xl font-bold mb-3">
                            Experience
                        </div>
                        <ul className="pl-4">
                            <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
                                <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-[#EBB88C] group-first:top-3"></div>
                                <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-[#EBB88C] bg-black dark:bg-white"></div>
                                <h3 className="mt-2 text-sm/6 font-semibold text-[#EBB88C]">
                                Web Developer | Dec 2019 - Current
                                </h3>
                                <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-black dark:text-white">
                                PT Walden Global Services
                                </p>
                                <p className="mt-0.5 text-sm/6 text-zinc-400">
                                Since the company I work for focuses on serving client needs, the choice of technology, programming languages, and frameworks is tailored to meet those specific requirements.
                                </p>
                                <h3 className="mt-2 text-sm/6 font-semibold text-[#EBB88C]">
                                Quality Assurance | Aug 2019 - Nov 2019
                                </h3>
                                <p className="mt-0.5 text-sm/6 text-zinc-400">
                                Due to my experience in automated testing, I assist the Software Tester division in conducting automated testing.
                                </p>
                            </li>
                            <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
                                <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-[#EBB88C] group-first:top-3"></div>
                                <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-[#EBB88C] bg-black dark:bg-white"></div>
                                <h3 className="mt-2 text-sm/6 font-semibold text-[#EBB88C]">
                                Web Developer | Jul 2018 - Jun 2019
                                </h3>
                                <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-black dark:text-white">
                                PT Gudang Solusi Group
                                </p>
                                <p className="mt-0.5 text-sm/6 text-zinc-400">
                                My first working experience to enter the coding world! and wow it's very challenging!
                                </p>
                                <h3 className="mt-2 text-sm/6 font-semibold text-[#EBB88C]">
                                Quality Assurance | Jan 2019 - Jun 2019
                                </h3>
                                <p className="mt-0.5 text-sm/6 text-zinc-400">
                                This is also my first experience entering the world of application testing, quite interesting
                                </p>
                            </li>
                            <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
                                <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-[#EBB88C] group-first:top-3"></div>
                                <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-[#EBB88C] bg-black dark:bg-white"></div>
                                <h3 className="mt-2 text-sm/6 font-semibold text-[#EBB88C]">
                                Frontend Developer
                                </h3>
                                <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-black dark:text-white">
                                Freelance
                                </p>
                                <p className="mt-0.5 text-sm/6 text-zinc-400">
                                When I have enough free time, I look for side jobs to gain more experience, knowledge, and enhance my projects.
                                </p>
                                <h3 className="mt-2 text-sm/6 font-semibold text-[#EBB88C]">
                                Qualtiy Assurance
                                </h3>
                                <p className="mt-0.5 text-sm/6 text-zinc-400">
                                Sometimes, I receive offers from my colleagues to work on freelance application testing jobs, and I enjoy it as my side job.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <div className="dark:text-white text-2xl font-bold mb-3">
                            Education
                        </div>
                        {education.sort((a, b) => b.id - a.id).map((item) => (
                            <div key={item.id} className="mb-6 grid grid-cols-4 gap-4 p-3 border border-0.25 border-[#EBB88C] border-solid rounded-lg">
                        
                                <div className="col-span-1 flex items-center justify-center">
                                    <img src={item.image} alt="img" className="w-auto h-auto rounded-lg"/>
                                </div>

                                <div className="col-span-3 grid grid-rows-3">
                                    <div className="row-span-1 font-display text-2xs/6 order-first font-semibold text-black dark:text-white">{item.name}</div>
                                    <div className="row-span-1 text-sm/6 font-semibold text-[#EBB88C]">{item.departement} {item.gpa ? '| ' + item.gpa : ''}</div>
                                    <div className="row-span-1 text-sm/6 text-zinc-400">{item.start} - {item.end}</div>
                                    <div className="row-span-1 text-sm/6 text-zinc-400">{item.desc} </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Resume;
