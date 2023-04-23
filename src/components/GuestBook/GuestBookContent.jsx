
// TODO: Fix text overflow
const GuestBookContent = ({ data, socketIds }) => {
  console.log(socketIds);

  const allMessages = [];
  data.forEach((userData) => {
    userData.messages.forEach((message) => {
      allMessages.push({
        userName: userData?.userName,
        photoURL: userData?.photoURL,
        message: message?.message,
        createdAt: message?.createdAt
      });
    });
  });

  allMessages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  return (
    <div>
      {allMessages?.reverse().map((message) => (
        <div key={`${message.userName}-${message.createdAt}`} className="mt-2">
          <div className="flex flex-row justify-start gap-[4px] 
                      mt-5 mb-5 md:mt-4 md:mb-4 font-[300] text-[.95rem]
                 md:text-[.63rem]">
            <div className="avatar w-9 h-9 mb-auto md:w-6 md:h-6 mr-[7px] md:mr-[3px] ">
              <img
                src={message?.photoURL} alt="Profile photo" className="outline rounded-full outline-[2px] md:outline-[1px] outline-[#67b3d1] 
                                                                         md:-mt-[.2rem] -mt-[.4rem]" />
              <span class="-top-[6.5px] left-[26.5px] absolute w-3 h-3 
                        bg-green-400 border-2  dark:border-black border-white rounded-full
                          md:-top-[2.5px] md:left-[17.7px]  md:w-[7px] md:h-[7px] md:border-[1px]">

              </span>

            </div>
            <span className="font-[400]">{message?.userName}:</span>
            <span className="w-[70%] md:w-[70%] break-words ">{message?.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GuestBookContent;
