"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
// pages/index.tsx

import { useState } from 'react';

export default function Home() {
  const [useCase, setUseCase] = useState('');
  const handleUseCaseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUseCase(event.target.value);
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl space-y-8 mx-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            How are you planning to use Notion?
          </h2>
          <p className="mt-2 text-gray-500">
            We'll streamline your setup experience accordingly.
          </p>
        </div>
        <div className="flex flex-row gap-8 space-y-4">
        <div className={`flex flex-col mt-4 items-center rounded-md p-4 shadow-md transition duration-200 ease-in cursor-pointer ${
              useCase === 'team' ? ' border-2 border-solid border-blue-500' : 'hover:bg-gray-100'
            }`}
          onClick={() => setUseCase('team')}>
            <div className='flex flex-row w-full place-content-end'>
            <input
              id="team"
              name="use-case"
              type="checkbox"
              value="team"
              className="hidden peer"
              checked={useCase === 'team'}
              onChange={handleUseCaseChange}
            />
            <div className="flex p-1 relative w-5 h-5 rounded-full place-content-center bg-transparent peer-checked:bg-blue-500 border-2 border-solid peer-checked:border-none border-gray-400 transition delay-100">
            {useCase === 'team' ? <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>:<></>}          
            </div>
            </div>
            <div className="ml-4 pb-10">
            <div className='flex place-content-center'>
                <div className="relative w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:h-[150px] md:w-[150px]">
                <Image
            src = "/team.png"
            fill
            className='object-contain'
            alt='team' />
            </div>
            </div>
              <h3 className=" text-center text-lg font-medium text-gray-900">For my team</h3>
              <p className="mt-1 text-center text-sm text-gray-500">
                Collaborate on your docs, projects, and wikis.
              </p>
            </div>
          </div>
          <div className={`flex flex-col items-center rounded-md p-4 shadow-md transition duration-200 ease-in cursor-pointer ${
              useCase === 'personal' ? ' border-2 border-solid border-blue-500' : 'hover:bg-gray-100'
            }`}
          onClick={() => setUseCase('personal')}>
            <div className='flex flex-row w-full place-content-end'>
            <input
              id="personal"
              name="use-case"
              type="checkbox"
              value="personal"
              className="hidden peer"
              checked={useCase === 'personal'}
              onChange={handleUseCaseChange}
            />
            <div className="flex p-1 relative w-5 h-5 rounded-full place-content-center bg-transparent peer-checked:bg-blue-500 border-2 border-solid peer-checked:border-none border-gray-400 transition delay-100">
            {useCase === 'personal' ? <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>:<></>}          
            </div>
            </div>
            <div className="ml-4 pb-10">
            <div className='flex place-content-center'>
                <div className="relative w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:h-[150px] md:w-[150px]">
                <Image
            src = "/personal.png"
            fill
            className='object-contain'
            alt='personal' />
            </div>
            </div>
              <h3 className=" text-center text-lg font-medium text-gray-900">For personal use</h3>
              <p className="mt-1 text-center text-sm text-gray-500">
              Write better. Think more clearly. Stay organized.
              </p>
            </div>
          </div>
          <div className={`flex flex-col items-center rounded-md p-4 shadow-md transition duration-200 ease-in cursor-pointer ${
              useCase === 'school' ? ' border-2 border-solid border-blue-500' : 'hover:bg-gray-100'
            }`}
          onClick={() => setUseCase('school')}>
            <div className='flex flex-row w-full place-content-end'>
            <input
              id="school"
              name="use-case"
              type="checkbox"
              value="school"
              className="hidden peer"
              checked={useCase === 'school'}
              onChange={handleUseCaseChange}
            />
            <div className="flex p-1 relative w-5 h-5 rounded-full place-content-center bg-transparent peer-checked:bg-blue-500 border-2 border-solid peer-checked:border-none border-gray-400 transition delay-100">
            {useCase === 'school' ? <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>:<></>}            
            </div>
            </div>
            <div className="ml-4 pb-10">
            <div className='flex place-content-center'>
                <div className="relative w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:h-[150px] md:w-[150px]">
                <Image
            src = "/school.png"
            fill
            className='object-contain'
            alt='school' />
            </div>
            </div>
              <h3 className=" text-center text-lg font-medium text-gray-900">For school</h3>
              <p className="mt-1 text-center text-sm text-gray-500">
              Keep your notes, research, and tasks all in one place.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center'><Button>Continue</Button></div>
        <div className="text-center">
          <p className="mt-4 text-sm text-gray-500">
            See you on the other side.
          </p>
        </div>
      </div>
    </div>
  );
}