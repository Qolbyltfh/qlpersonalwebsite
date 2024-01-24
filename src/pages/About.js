import React from "react";
import Layout from "../components/Layout";

import { FaAngular, FaReact, FaLaravel, FaPhp, FaWindows, FaLinux, FaGitAlt, FaTrello } from "react-icons/fa";
import { SiNuxtdotjs, SiJavascript, SiTypescript, SiPostgresql, SiMysql } from "react-icons/si";
import { LuImageOff, LuUserSquare2 } from "react-icons/lu";

const About = () => {
  const programmingLanguage = [
    {
      id: 0,
      name: 'Javascript',
      icon: SiJavascript
    },
    {
      id: 1,
      name: 'Typescript',
      icon: SiTypescript
    },
    {
      id: 2,
      name: 'PHP',
      icon: FaPhp
    }
  ];

  const framework = [
    {
      id: 0,
      name: 'Angular',
      icon: FaAngular
    },
    {
      id: 1,
      name: 'Laravel',
      icon: FaLaravel
    },
    {
      id: 2,
      name: 'Nuxt.js',
      icon: SiNuxtdotjs
    },
    {
      id: 3,
      name: 'React.js',
      icon: FaReact
    },
  ];

  const databaseEngine = [
    {
      id: 0,
      name: 'MySQL',
      icon: SiMysql
    },
    {
      id: 1,
      name: 'PostgreSQL',
      icon: SiPostgresql
    }
  ];

  const versionControl = [
    {
      id: 0,
      name: 'Git',
      icon: FaGitAlt
    }
  ];

  const operatingSystem = [
    {
      id: 0,
      name: 'Windows',
      icon: FaWindows
    },
    {
      id: 1,
      name: 'Linux',
      icon: FaLinux
    }
  ]

  const projectManagement = [
    {
      id: 0,
      name: 'Trello',
      icon: FaTrello
    },
    {
      id: 1,
      name: 'Taiga',
      icon: LuImageOff
    },
  ]

  return (
    <Layout>
      <div className="pt-10 md:px-32">
        <div className="flex items-center">
          <div className="border-4 border-[#EBB88C] h-9 mr-4"></div>
          <div className="dark:text-white text-4xl font-bold">About</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="p-4">
            <LuUserSquare2 className="w-32 h-32 mb-3 dark:text-white"/>
            <div className="mb-4 dark:text-white">
              <div className="dark:text-white text-2xl font-bold mb-3">
                Profile
              </div>
              <div className="mb-3">
                <div className="text-gray-500 font-bold">Full Name</div>
                <div>Qolby Latifah</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-500 font-bold">Date of Birth</div>
                <div>November 07, 1999</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-500 font-bold">City</div>
                <div>Bandung, Indonesian</div>
              </div>
              <div className="mb-3">
                <div className="text-gray-500 font-bold">Husband</div>
                <div className="hover:underline">
                  <a
                    href="https://www.uglyholiday.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yuma Andhika
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-6  p-3 border border-0.25 border-[#EBB88C] border-solid">
              <span className="dark:text-white">
                I am a Frontend Web Developer by profession. I also have
                experience in Software Quality Assurance and Fullstack
                Development. I am currently in my 7th semester of studying
                Computer Science. Before, I graduated from a vocational school
                with a 4-year program in Software Engineering.
              </span>
            </div>
          </div>
          <div className="p-4">
            <div className="dark:text-white text-2xl font-bold mb-3">
              Technical Experience
            </div>
            <div>
              <div>
                <div className="text-gray-500 font-bold mb-2">Programming Language</div>
                {programmingLanguage.map((item) => (
                  <div key={item.id} className="p-2 px-2 rounded-lg align-middle inline-flex items-center mr-2 border border-0.25 border-[#EBB88C] border-solid mb-3">
                    <div className='flex items-center dark:text-white'>
                      <item.icon className="w-6 h-6 mr-2"/>
                      <p className="font-medium text-color">{item.name}</p>
                    </div>
                  </div>
                  ))}
              </div>
              <div>
                <div className="text-gray-500 font-bold mb-2">Framework</div>
                {framework.map((item) => (
                  <div key={item.id} className="p-2 px-2 rounded-lg align-middle inline-flex items-center mr-2 border border-0.25 border-[#EBB88C] border-solid mb-3">
                    <div className='flex items-center dark:text-white'>
                      <item.icon className="w-6 h-6 mr-2"/>
                      <p className="font-medium text-color">{item.name}</p>
                    </div>
                  </div>
                  ))}
              </div>
              <div>
                <div className="text-gray-500 font-bold mb-2">Database Engine</div>
                {databaseEngine.map((item) => (
                  <div key={item.id} className="p-2 px-2 rounded-lg align-middle inline-flex items-center mr-2 border border-0.25 border-[#EBB88C] border-solid mb-3">
                    <div className='flex items-center dark:text-white'>
                      <item.icon className="w-6 h-6 mr-2"/>
                      <p className="font-medium text-color">{item.name}</p>
                    </div>
                  </div>
                  ))}
              </div>
              <div>
                <div className="text-gray-500 font-bold mb-2">Version Control</div>
                {versionControl.map((item) => (
                  <div key={item.id} className="p-2 px-2 rounded-lg align-middle inline-flex items-center mr-2 border border-0.25 border-[#EBB88C] border-solid mb-3">
                    <div className='flex items-center dark:text-white'>
                      <item.icon className="w-6 h-6 mr-2"/>
                      <p className="font-medium text-color">{item.name}</p>
                    </div>
                  </div>
                  ))}
              </div>
              <div>
                <div className="text-gray-500 font-bold mb-2">Operating System</div>
                {operatingSystem.map((item) => (
                  <div key={item.id} className="p-2 px-2 rounded-lg align-middle inline-flex items-center mr-2 border border-0.25 border-[#EBB88C] border-solid mb-3">
                    <div className='flex items-center dark:text-white'>
                      <item.icon className="w-6 h-6 mr-2"/>
                      <p className="font-medium text-color">{item.name}</p>
                    </div>
                  </div>
                  ))}
              </div>
              <div>
                <div className="text-gray-500 font-bold mb-2">Project Management</div>
                {projectManagement.map((item) => (
                  <div key={item.id} className="p-2 px-2 rounded-lg align-middle inline-flex items-center mr-2 border border-0.25 border-[#EBB88C] border-solid mb-3">
                    <div className='flex items-center dark:text-white'>
                      <item.icon className="w-6 h-6 mr-2"/>
                      <p className="font-medium text-color">{item.name}</p>
                    </div>
                  </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
