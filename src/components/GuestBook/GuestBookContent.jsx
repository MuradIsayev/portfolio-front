const GuestBookContent = ({ data }) => {
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
        <div className="mt-2">
          <div className="flex flex-row justify-start items-center gap-[3px] 
                      mt-2 max-w-[60%] font-[300] text-[.96rem] 
                md:mt-1 md:w-[90%] md:font-[400] md:text-[.77rem]">
            <img
              src={message?.photoURL} alt="Profile photo" className="rounded-full w-7 border border-gray-300 mr-1 transition ease-in-out duration-100 blur-[.8px] hover:blur-0" />
            <span className="font-[400]">{message?.userName ? message?.userName : 'Anonymous'}:</span>
            <span className="max-w-[85%]">{message?.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GuestBookContent;
