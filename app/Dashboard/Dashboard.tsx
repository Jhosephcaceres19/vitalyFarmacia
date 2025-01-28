import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className='flex flex-col xl:flex-row xl:h-screen'>
      {/* Contenedor de la imagen */}
      <div className='h-90 xl:h-full xl:w-1/2 bg-sky-400 rounded-b-4xl xl:rounded-b-none xl:rounded-r-4xl overflow-hidden'>
        <img 
          src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1737972201/4952124896499052248_ler41y.jpg" 
          alt="" 
          className='w-full h-full object-cover'
        />
      </div>

      {/* Contenedor del formulario */}
      <div className='flex mt-15 mb-4 xl:mt-0 flex-col items-center justify-center gap-8 xl:w-1/2 xl:px-16'>
        <img 
          src="https://res.cloudinary.com/dcyr5qkhg/image/upload/v1737971947/vitaly_ucr8hf.png" 
          alt="vitaly" 
        />
        <h1 className='text-4xl font-bold'>¡Bienvenido de nuevo!</h1>
        <input className='border-2 border-black p-3 w-90' placeholder='Correo electronico'></input>
        <input className='border-2 border-black p-3 w-90' placeholder='Contraseña'></input>
        <Link href="#" className='text-3xl font-semibold border-2 rounded-full bg-sky-400 p-4 border-black'>Iniciar sesion</Link>
      </div>
    </div>
  );
}
