const HeroSection = () => {
    return (
      <div className="relative h-[550px] flex items-center justify-center text-white text-center">
        {/* Background Image with Gradient Shadow */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://m.media-amazon.com/images/S/pv-target-images/7c6c7a6ca14516de8d947ddbd99a81fc97cfd02d2da344cfd29e304e8989f481.jpg')"
          }}
        >
          {/* Gradient Shadow Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        </div>
  
        {/* Content */}
        <div className="relative z-10 bg-black/40 p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold">Welcome to MovieFlex 🎬</h1>
          <p className="text-lg mt-3">Discover, filter, and enjoy your favorite movies in one place...</p>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  