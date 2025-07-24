import { FaReact, FaNodeJs, FaDocker, FaAws, FaStripe, FaGithub, FaGoogle } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTailwindcss, SiNextdotjs, SiRedis, SiKubernetes, SiOpenai, SiNotion, SiPaypal } from 'react-icons/si';

const FloatingTechIcons = () => {
  return (
    <div className="relative h-32 overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex space-x-8">
          <FaReact className="w-8 h-8 text-blue-500 animate-bounce" style={{animationDelay: '0s'}} />
          <FaNodeJs className="w-8 h-8 text-green-500 animate-bounce" style={{animationDelay: '0.2s'}} />
          <SiMongodb className="w-8 h-8 text-green-600 animate-bounce" style={{animationDelay: '0.4s'}} />
          <FaDocker className="w-8 h-8 text-blue-400 animate-bounce" style={{animationDelay: '0.6s'}} />
          <FaAws className="w-8 h-8 text-orange-500 animate-bounce" style={{animationDelay: '0.8s'}} />
          <SiFirebase className="w-8 h-8 text-yellow-500 animate-bounce" style={{animationDelay: '1s'}} />
          <FaStripe className="w-8 h-8 text-purple-600 animate-bounce" style={{animationDelay: '1.2s'}} />
          <SiOpenai className="w-8 h-8 text-gray-800 animate-bounce" style={{animationDelay: '1.4s'}} />
        </div>
      </div>
      
      <div className="absolute top-4 left-0 w-full">
        <div className="flex justify-between">
          <SiTailwindcss className="w-6 h-6 text-cyan-500 animate-ping" />
          <FaGithub className="w-6 h-6 text-gray-800 animate-ping" style={{animationDelay: '0.5s'}} />
          <FaGoogle className="w-6 h-6 text-red-500 animate-ping" style={{animationDelay: '1s'}} />
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 w-full">
        <div className="flex justify-around">
          <SiNextdotjs className="w-5 h-5 text-black animate-ping" style={{animationDelay: '0.3s'}} />
          <SiRedis className="w-5 h-5 text-red-600 animate-ping" style={{animationDelay: '0.7s'}} />
          <SiKubernetes className="w-5 h-5 text-blue-600 animate-ping" style={{animationDelay: '1.1s'}} />
          <SiNotion className="w-5 h-5 text-gray-700 animate-ping" style={{animationDelay: '1.5s'}} />
        </div>
      </div>
    </div>
  );
};

export default FloatingTechIcons;
