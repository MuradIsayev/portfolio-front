
const GuestBookContent = ({ data }) => {

  const allMessages = [];
  data.forEach((userData) => {
    userData.messages.forEach((message) => {
      allMessages.push({
        userName: userData?.userName,
        photoURL: userData?.photoURL,
        message: message?.message,
        createdAt: message?.createdAt,
        isOnline: userData?.isOnline,
      });
    });
  });

  allMessages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  return (
    <div>
      {allMessages?.reverse().map((message) => (
        <div key={`${message.userName}-${message.createdAt}`} className="mt-2">
          <div className="flex flex-row justify-start gap-[4px]
                      mt-5 mb-5 md:mt-4 md:mb-4 font-[300] text-[.95rem] md:text-[.63rem]">
            <div className="avatar w-[35px] h-[35px] mb-auto md:w-[23px] md:h-[23px] mr-[7px] md:mr-[3px]">
              <img
                src={message?.photoURL} alt="Profile photo" className="outline rounded-full outline-[2px] md:outline-[1px]
                                                                       outline-[#61a6c2] md:-mt-[.25rem] -mt-[.4rem]  " />
              {message?.isOnline ? <span className="-top-[7px] left-[26.3px] absolute w-3 h-3 
                        bg-green-400 border-2  dark:border-black border-white rounded-full
                          md:-top-[3.6px] md:left-[17.7px]  md:w-[7px] md:h-[7px] md:border-[1px]">
              </span> : <span className="-top-[7px] left-[26.3px] absolute w-3 h-3 
                        bg-gray-500 border-2  dark:border-black border-white rounded-full
                          md:-top-[3.6px] md:left-[17.7px] md:w-[7px] md:h-[7px] md:border-[1px]">
              </span>}
            </div>
            <div className="flex w-[85%] gap-[.2rem]">
              <span className=" max-w-[20%] md:max-w-[35%] font-[400] md:whitespace-nowrap">{message?.userName}:</span>
              <span className=" w-[85%] md:w-[75%] break-words">{message?.message}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GuestBookContent;
