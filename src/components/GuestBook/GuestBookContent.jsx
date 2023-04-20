// TODO: Fix space between navbar and guestbook (when messages span is removed, it works fine)
// TODO 2: Fix text overflow
// TODO 3: Fix dark mode for guestbook

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
        <div key={`${message.userName}-${message.createdAt}`} className="mt-2">
          <div className="flex flex-row justify-start gap-[5px] 
                      mt-4 font-[300] text-[.95rem]
                md:mt-3 md:text-[.63rem]">
            <img
              src={message?.photoURL} alt="Profile photo" className="mb-auto md:-mt-[.2rem] -mt-[.1rem] rounded-full w-7 md:w-6 border border-gray-600 dark:border-gray-200 mr-1" />
            <span className="font-[400]">{message?.userName ? message?.userName : 'Anonymous'}:</span>
            <span className="w-[70%] md:w-[70%] break-words ">{message?.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GuestBookContent;
