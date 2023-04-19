import { motion } from "framer-motion";

const GuestBookContent = ({ data }) => {
  return (
    <div>
      {data.map((userData) => (
        <div className="mt-2">
          {userData?.messages.map((message) => (
            <div className="flex flex-row justify-start items-center gap-[3px] 
                      mt-2 max-w-[60%] font-[300] text-[.96rem] 
                md:mt-1 md:w-[90%] md:font-[400] md:text-[.77rem]">
              <motion.img
                src={userData?.photoURL} alt="Profile photo" className="rounded-full w-8 border border-gray-300 mr-1 transition ease-in-out duration-100 blur-[.7px] hover:blur-0" />
              <span className="font-[400]">{userData?.userName ? userData?.userName : 'Anonymous'}:</span>
              <span className="max-w-[85%]">{message}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GuestBookContent;
