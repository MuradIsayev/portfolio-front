const GuestBookContent = ({ data }) => {

  return (
    <div>
      {data?.map((message) => (
        <div key={`${message.userName}-${message.createdAt}`} className="mt-2">
          <div key={message?.createdAt} className="flex flex-row items-center mb-4 guestbook-container">

            <div className="w-10 h-10 rounded-full object-contain md:w-7 md:h-7 mr-[7px] md:mr-[3px] relative mb-auto tooltip" data-tip={message?.createdAt}>
              <img
                src={message?.photoURL} alt="Profile photo" className="rounded-full " />
              {message?.isOnline ? <span class="top-0 left-7 absolute w-3 h-3 bg-green-400 border-2 border-white dark:border-[#09090B] rounded-full
                  md:left-5 md:w-[7px] md:h-[7px] md:border-[1px]
              "></span>
                : <span class="top-0 left-7 absolute md:left-5 md:w-[7px] md:h-[7px] md:border-[1px]  w-3 h-3 dark:bg-gray-300 bg-gray-400  border-2 border-white dark:border-[#09090B] rounded-full"></span>}
            </div>
            <div className="text-sm md:text-xs break-words md:w-[90%]">
              <span className="mr-1 text-neutral-600 whitespace-nowrap dark:text-neutral-400">
                {message?.userName}:
              </span>
              <span className="dark:text-[#fafafa] text-[#09090B]">
              {message?.message}
              </span>
            </div>
          </div>
        </div>
      ))
      }
    </div >

  );
}

export default GuestBookContent;


