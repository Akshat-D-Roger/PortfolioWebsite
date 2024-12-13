import { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1nbVdZZDXKtflc_kBk1O-IPRV8JF51n8y/view?usp=drive_link', '_blank');
  };

  return (
    <div className={`fixed w-full px-[1rem] sm:px-[2rem] z-50 transition-all duration-300 ${isScrolled ? 'nav-gradient shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="flex items-center justify-end h-16">
        <div className="flex items-center gap-4">
          <button onClick={handleDownloadResume} className="hidden md:flex items-center gap-2 px-4 py-2 hover:text-red-500 text-black transition-colors " >
            <FileDown size={18} />
            <div className='font-semibold text-lg tracking-tight font-mono'>RESUME</div>
          </button>
          <button className="md:hidden text-gray-800 hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden p-2">
          <button onClick={handleDownloadResume} className="flex items-center gap-2 px-4 py-2 text-black hover:text-red-500 transition-colors w-full mb-2 justify-center border-b border-black">
            <FileDown size={18} />
            <div className='font-semibold text-lg tracking-tight font-mono'>RESUME</div>
          </button>
        </div>
      )}
    </div>
  );
}