import Image from "next/image";

export default function Home() {
  return (
    <main className="m-6 flex flex-col place-content-center  bg-blue-950 rounded-lg">
      <div className="mx-auto mt-6 ">
        <Image 
          src={'/image-equilibrium.jpg'}
          width={'250'}
          height={'150'}
          alt="equilibrium img"
          className="rounded-lg sm:hidden"
        />
        <Image 
          src={'/image-equilibrium.jpg'}
          width={'300'}
          height={'200'}
          alt="quilibrium img"
          className="rounded-lg hidden sm:block md:hidden "
        />
        <Image 
          src={'/image-equilibrium.jpg'}
          width={'350'}
          height={'250'}
          alt="quilibrium img"
          className="rounded-lg hidden md:block"
        />
      </div>
      
      <div className="p-6 flex flex-col items-start gap-4 ">
        <h1 className="text-white font-bold text-xl text-start hover:text-green-300 cursor-pointer ">Equilibrium #3429</h1>
        <p className="text-slate-300 text-sm">Our Equilibriium collection promotes balance and calm</p>
        
        <div className="w-full flex  justify-around gap-4">
          <p className="text-green-300 text-sm flex gap-1 items-center">
            <span>
              <img src="/icon-ethereum.svg" alt="" />
            </span> 0.0.41 ETH</p>
          <p className="text-slate-300 text-sm flex gap-2 items-center"><span>
              <img src="/icon-clock.svg" alt="" />
            </span>3 days left</p>
        </div>
      </div>
      
      <div className="bg-slate-600 h-[2px] w-4/5 mx-auto"/>

      <div className="mx-auto m-4 flex gap-2 place-items-center">
        <Image 
          src={'/image-avatar.png'}
          width={'30'}
          height={'30'}
          alt="avatar"
        />
        <p className="text-slate-300 text-sm">Creation of <span className="text-white font-semibold cursor-pointer hover:text-green-300">Jules Wyvern</span></p>
      </div>
    </main>
  );
}
