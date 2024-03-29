import { Tooltip } from 'react-tooltip'
import { useThemeStore } from '../../store/useThemeDark';

const GuestBookContent = ({ data }) => {

  const { isThemeDark } = useThemeStore();

  return (
    <div
    >
      {data?.map((message, index) => (
        <div key={index} className="mt-3 md:mt-[10px]">
          <div key={message?.createdAt} className="flex flex-row items-center max-w-lg guestbook-container lg:max-w-xl md:max-w-sm">
            <div className="w-10 lg:w-[3rem] rounded-full object-contain md:w-7 md:h-7 mr-[7px] md:mr-[3px] relative mb-auto ">
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={message?.createdAt}
                data-tooltip-place="top"
                data-tooltip-variant={isThemeDark ? "light" : "dark"}
                src={message?.photoURL} alt="Profile photo" className="rounded-full" />
              {message?.isOnline ? <span className="top-0 left-7 absolute w-3 h-3 bg-green-400 border-2 border-white dark:border-[#09090B] rounded-full
                  md:left-5 md:w-[7px] md:h-[7px] md:border-[1px]
                  lg:left-[32px] lg:w-[13px] lg:h-[13px]
              "></span>
                : <span className="top-0 left-7 absolute md:left-5 md:w-[7px] md:h-[7px] md:border-[1px] 
                lg:left-[32px] lg:w-[13px] lg:h-[13px]
                 w-3 h-3 dark:bg-gray-300 bg-gray-400  border-2 border-white dark:border-[#09090B] rounded-full"></span>}
            </div>
            <div className="text-sm md:text-xs break-words md:w-[90%] w-full lg:text-[.95rem]">
              <span className="mr-1 text-neutral-600 whitespace-nowrap dark:text-neutral-400">
                {message?.userName}:
              </span>
              <span className="dark:text-[#d1d1d1] text-[#09090B]">
                {message?.message}
              </span>
            </div>
          </div>
        </div>
      ))
      }
      <Tooltip id="my-tooltip" opacity={1}
        style={{
          borderRadius: "6px",
          padding: "6px 9px",
          fontSize: "1.65vmin",
        }}
      />
    </div >

  );
}

export default GuestBookContent;


