import { motion } from "framer-motion";

function GuestBookContent({ currentUser, message, photoUrl }) {
  return (
    <div className="mt-2">
      <div className="flex flex-row justify-start items-center gap-[3px] 
                      mt-2 max-w-[60%] font-[300] text-[.96rem] 
                md:mt-1 md:w-[90%] md:font-[400] md:text-[.77rem]">
        <motion.img 
          src={photoUrl} alt="Profile photo" className="rounded-full w-8 border border-gray-300 mr-1 transition ease-in-out duration-100 blur-[.7px] hover:blur-0" />
        <span className="font-[400]">{currentUser}:</span>
        <span className="max-w-[85%]">{message}</span>  
      </div>
    </div>
  );
}

export default GuestBookContent;
