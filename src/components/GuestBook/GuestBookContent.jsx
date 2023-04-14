import './GuestBook.css';

function GuestBookContent() {
  return (
    <div className="flex flex-row justify-start gap-[4px]
    mt-4 w-[90%] font-[400] text-[.9rem]
    md:flex md:flex-row md:justify-start md:gap-[4px]
    md:mt-[1.1rem] md:w-[90%] md:font-[400] md:text-[.71rem]">
      <span className="font-[500]">User1: </span>
      <span>text</span>
    </div>
  );
}

export default GuestBookContent;
