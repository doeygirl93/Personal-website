

export const Hero = () => {
    return (
        <section className="relative w-full flex items-center overflow-hidden p-30 ">
           
            {/* content */}
            <div className="grid grid-cols-[1fr_2fr] gap-8 relative z-10 mx-auto">
                {/*Right col (my cute ahh pfp) */}
                <div className=" justify-center relative animate-fade-in animation-delay-300">
                    {/* pfp */}
                    <div className=" p-4">
                            <h1 className="text-7xl font-bold text-white/85">DoeyGirl</h1>
                            </div>
                    <div className="relative glass rounded-3xl p-2">
                            <img src="/pfp.jpg" alt="DOeyGirl's pfp" className=" w-full aspect-[4/5] object-cover rounded-2xl"/>
                        <div className="relative max-w-md mx-auto">
                        </div>
                        <p className="text-lg text-white/60 mt-4 mx-1 text-center">
                                Welcome to my portfolio! I'm a passionate developer and designer.
                            </p>
                    </div>
                    

                    

                </div>
                
                
                {/* Left col (basicaly the text section)*/}
                <div className="relative border-2 border-amber-100 rounded-2xl">
                    <img src="/me.jpg" 
                    alt="Hero img" 
                    className="w-full h-full object-cover opacity-50 blur-[6px] transition-opacity duration-300 hover:opacity-20"/>
                        </div>
                        
                    </div>

             



        
        </section>
    );
};
