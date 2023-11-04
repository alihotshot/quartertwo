import Logo from 'public/vercel.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='flex bg-purple-300 justify-center'>
      <div className=''>
      <h1 className=' text-5xl font-bold text-blue-600'>Welcome to NorthBy</h1>
      <h2 className=' text-2xl font-semibold text-emerald-400'>A premium in sight and sound</h2>
      <button className=' bg-purple-600 text-white p-3 border border-b-orange rounded-xl'>Learn More</button>
      </div>
      <div>
        <Image src={Logo} alt="Panaverse Dao" />
      </div>
      </div>




<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

      <div className=' bg-purple-300 max-w-screen-xl mx-auto p-5'>
        <h1 className=' text-5xl font-bold text-blue-600 pl-44'>Welcome to NorthBy</h1>
        <div className='flex space-x-56'>
        <h2 className=' text-2xl font-semibold text-emerald-400 pl-56'>A premium in sight and sound</h2>
        <Image src={Logo} alt='Panaverse Dao'/>
      </div>
      <div className=' ml-80'>
        <button className=' bg-purple-600 text-white p-3 border border-b-orange rounded-xl'>Learn More</button>
      </div>
      </div>

    <div className='m-10 flex space-x-5 justify-between'>
      <button className='bg-red-300 p-6 order-last'>Card 1</button>
      <button className='bg-blue-300 p-6'>Card 2</button>
      <button className='bg-purple-300 p-6'>Card 3</button>
    </div>

    <div className='m-10 flex space-x-5 justify-around'>
      <button className='bg-red-300 p-6 order-last'>Card 1</button>
      <button className='bg-blue-300 p-6'>Card 2</button>
      <button className='bg-purple-300 p-6'>Card 3</button>
    </div>

    <div className='m-10 flex space-x-5 justify-evenly'>
      <button className='bg-red-300 p-6 order-last'>Card 1</button>
      <button className='bg-blue-300 p-6'>Card 2</button>
      <button className='bg-purple-300 p-6'>Card 3</button>
    </div>

    <div className='m-10 flex flex-col space-y-4'>
      <button className='p'>Card 1</button>
      <button>Card 1</button>
      <button>Card 1</button>
    </div>

    {/* <h2 className=' font-bold text-xl'>Panaverse Dao</h2> */}
    <h2 className=' font-bold text-[20px]'>Panaverse Dao</h2>
    <div className='my-8'>
      <p>This is a first line</p>
      <button className='bg-yellow-400 p-4 m-5'>Button</button>
    </div>

    <div className='mt-10'>
      <button className='border border-black p-6'>One</button>
      <button className='border border-black mx-8'>Two</button>
      <button className='border border-black border-4 mx-10'>Three</button>
    <button className='border border-black border-2 rounded-xl mx-10'>Four</button>
    </div>
    </div>
    )
}
