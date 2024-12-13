import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden section-gradient-1">
      <div className="relative flex flex-col justify-center items-center z-10 text-center px-4">
        <div className='inline-block'>
          <div className="cardo-regular typing text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-gray-800 overflow-hidden whitespace-nowrap border-r border-red-500">
            Hi, I'm Akshat.
          </div>
        </div>
        <div className="cardo-regular text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-gray-800 animate-fade-in">
          A FullStack developer.
        </div>
        <p className="text-md my-[0.5rem] text-gray-600 lg:w-[75%] text-gray-400">
        I am proficient in crafting seamless frontend experiences and robust backend solutions. I'm passionate about crafting experiences that are engaging, accessible, and user-centric. 
        </p>

        <div className="flex justify-center gap-6 mt-[3rem]">
          <a href="https://github.com/Akshat-D-Roger" target="blank" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/akshat-khandelwal-5899741ab/" target="blank" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:kakshat23121999@gmaill.com" target="blank" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>

        {/* Section Navigation */}
        <div className='w-full flex flex-col sm:flex-row mt-[2rem] justify-between mt-[4rem]'>
            <a  href="#projects" className="sm:grow py-[1rem] sm:py-[5rem] sm:border border-white text-gray-700 hover:bg-black hover:text-white transition-all duration-300">
              Projects
            </a>
            <a href="#experience" className="sm:grow py-[1rem] sm:py-[5rem] sm:border border-white text-gray-700 hover:bg-black hover:text-white transition-all duration-300">
              Experience
            </a>
            <a href="#skills" className="sm:grow py-[1rem] sm:py-[5rem] sm:border border-white text-gray-700 hover:bg-black hover:text-white transition-all duration-300">
              Skills
            </a>
        </div>
      </div>
    </div>
  );
}