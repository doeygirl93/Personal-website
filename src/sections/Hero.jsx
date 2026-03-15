

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* background */}
            <div className="absolute inset-0 blur-none">
                <img 
                src="/bisexual-city.jpg" 
                alt="Hero img" 
                className="w-full h-full object-cover opacity-90 blur-[4px]"
                />

                <div className="absolute inset-0 bg-linear-to-b from-bg/40 via-bg/10 to-bg/90" />

            </div>
            {/* fancy ahh dots*/}
        </section>
    );
};
