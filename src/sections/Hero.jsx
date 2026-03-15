

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* background */}
            <div className="absolute inset-0 z-0">
                <img 
                src="/bisexual-city.jpg" 
                alt="Hero img" 
                className="w-full h-full object-cover opacity-90 blur-[4px]"
                />

                <div className="absolute inset-0 bg-linear-to-b from-bg/40 via-bg/10 to-bg/90" />

            </div>
            {/* fancy ahh dots*/}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) =>(
                <div 
                className="absolute w-1 h-1 rounded-full opacity-60 "
                
                style={{
                    backgroundColor: "#E0B0FF",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${30 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`


                }}
                />

                ))}
            </div>


            {/* content */}
            <div>
                <div>
                {/* Left col (basicaly the text section)*/}
                <div>
                    <div>

                    </div>

                </div>



                {/*Right col (my cute ahh pfp) */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* pfp */}
                    <div className="relative max-w-md mx-auto">
                        <div className="relative glass rounded-3xl p-2">
                            <img src="/pfp.jpg" alt="DOeyGirl's pfp" className=" w-full aspect-[4/5] object-cover rounded-2xl"/>
                        </div>
                    </div>


                </div>


                </div>


            </div>

        </section>
    );
};
