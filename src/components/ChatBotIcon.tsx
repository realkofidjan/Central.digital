import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageSquare } from "lucide-react";

const SkeletonRobot = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-20 h-20 drop-shadow-2xl"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Head/Skull */}
    <rect x="30" y="20" width="40" height="35" rx="10" fill="white" />
    <rect x="35" y="45" width="30" height="15" rx="4" fill="white" />
    
    {/* Eyes */}
    <circle cx="42" cy="35" r="5" fill="#050505" />
    <circle cx="58" cy="35" r="5" fill="#050505" />
    <circle cx="42" cy="35" r="2" fill="#00FF00" className="animate-pulse" />
    <circle cx="58" cy="35" r="2" fill="#00FF00" className="animate-pulse" />

    {/* Teeth/Grill */}
    <rect x="40" y="52" width="2" height="6" fill="#050505" opacity="0.2" />
    <rect x="45" y="52" width="2" height="6" fill="#050505" opacity="0.2" />
    <rect x="50" y="52" width="2" height="6" fill="#050505" opacity="0.2" />
    <rect x="55" y="52" width="2" height="6" fill="#050505" opacity="0.2" />
    <rect x="58" y="52" width="2" height="6" fill="#050505" opacity="0.2" />

    {/* Neck/Spine */}
    <rect x="46" y="60" width="8" height="10" fill="white" opacity="0.8" />
    
    {/* Shoulders */}
    <rect x="25" y="70" width="50" height="8" rx="4" fill="white" />
    
    {/* Ribs */}
    <rect x="35" y="82" width="30" height="4" rx="2" fill="white" opacity="0.6" />
    <rect x="38" y="90" width="24" height="4" rx="2" fill="white" opacity="0.4" />
  </svg>
);

export default function ChatBotIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="fixed bottom-0 left-0 z-50 p-0 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Peeping Skeleton Robot */}
        <motion.div
          initial={{ y: 120, rotate: -15 }}
          animate={{ 
            y: isHovered || isOpen ? 10 : 80,
            rotate: isHovered || isOpen ? 0 : -15,
            x: isHovered || isOpen ? 10 : -10
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="cursor-pointer origin-bottom-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative group-hover:scale-105 transition-transform">
            <SkeletonRobot />
            
            {/* Notification Glow */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent/30 rounded-full blur-xl animate-pulse" />
          </div>
        </motion.div>

        {/* Chat Tooltip */}
        <AnimatePresence>
          {isHovered && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.8 }}
              className="absolute bottom-24 left-12 w-48 p-4 glass rounded-2xl border border-white/10 pointer-events-none"
            >
              <p className="text-xs font-medium text-white/80">
                Psst... Need a digital powerhouse? I'm here to help.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Window */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95, x: -20 }}
              animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
              exit={{ opacity: 0, y: 20, scale: 0.95, x: -20 }}
              className="absolute bottom-24 left-12 w-80 h-[450px] glass rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <div className="scale-150 translate-y-1">
                      <SkeletonRobot />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Bone-Bot AI</h4>
                    <span className="text-[10px] text-accent font-medium uppercase tracking-wider">Active</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-hide">
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none max-w-[85%] border border-white/5">
                  <p className="text-sm text-white/70 leading-relaxed">
                    Welcome to the digital underworld. I'm Bone-Bot. Ready to build something legendary?
                  </p>
                </div>
                <div className="bg-accent/20 p-3 rounded-2xl rounded-tr-none max-w-[85%] ml-auto border border-accent/20">
                  <p className="text-sm text-white/90 leading-relaxed font-medium">
                    Show me your best work.
                  </p>
                </div>
              </div>

              <div className="p-4 border-t border-white/5 bg-white/5">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Summon a message..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-accent hover:text-white transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
