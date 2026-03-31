

export const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden p-6 md:p-20 lg:p-40 ">
           
            {/* content */}
            <div className="grid grid-cols-[1fr_1.5fr] gap-15 relative z-10 mx-auto items-center justify-center ">
                {/*Right col (my cute ahh pfp) */}
                <div className=" justify-center relative animate-fade-in animation-delay-300 mt-10 md:mt-0 max-w-sm mx-auto">
                    {/* pfp */}
                    <div className=" p-4">
                            <h1 className="text-7xl font-bold text-white/85">DoeyGirl</h1>
                            </div>
                    <div className="relative glass rounded-3xl p-2">
                            <img src="/pfp.jpg" alt="DOeyGirl's pfp" className=" w-full aspect-[4/5] object-cover rounded-2xl duration-500 hover:scale-101"/>
                        <div className="relative max-w-md mx-auto">
                        </div>
                        <p className="text-lg text-white/60 mt-4 mx-1 text-center">
                                Welcome to my portfolio! I'm a passionate developer and designer.
                            </p>
                    </div>
                    

                    

                </div>
                
                
                {/* Left col (basicaly my cute pic)*/}
                <div className="flex justify-center items-center relative border-2 border-purple-900 rounded-2xl h-[500px] w-[50vw] transition-opacity duration-500 hover:scale-101">
                    <img src="/me4.png" 
                    alt="Hero img" 
                    className="w-full h-full object-cover opacity-90 blur-[1px]"/>
                        </div>
                        <div>
                        <p className="text-lg text-white/60 mt-4 mx-1 text-center">
                                Me irl!.
                            </p>
                    </div>
                    </div>

             



        
        </section>
    );
};
