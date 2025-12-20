import Image from '../../assets/images/page.png';

export default async function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image Section */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Decorative Background Shape (Bottom Left) */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-400 rounded-[40px] rotate-45 -z-10 opacity-80" />
          
          {/* Decorative Outline Square (Behind Head) */}
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-orange-400 rounded-2xl -z-10" />

          {/* Main Image */}
          <div className="relative w-full max-w-md">
            <img
              src={Image.src}// Replace with your actual image path
              alt="Professional Woman"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Learn New Skills To Go <span className="text-emerald-500 underline decoration-2 underline-offset-4">Ahead</span> <br />
            <span className="text-emerald-500 underline decoration-2 underline-offset-4">For Your</span> Career.
          </h1>

          <div className="space-y-4 text-slate-500 leading-relaxed max-w-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor 
              incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate 
              catchy, original, and high-converting copies in popular tones languages.
            </p>
            <p>
              Auto-generate catchy original and high-converting copies in popular tones 
              languages. From blogs to emails to ad copies auto-generate catchy.
            </p>
          </div>

          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300">
            Explore More
          </button>
        </div>

      </div>
    </main>
  );
}