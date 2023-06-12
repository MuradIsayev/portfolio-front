import { useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import './DownloadCV.scss';
import { FaAngleDoubleDown, FaCheck } from 'react-icons/fa';


const iconVariants = {
    hovered: {
        y: [0, -2, 0, 2, 0],
        transition: { duration: 0.5, ease: 'easeInOut' }
    }
};

const DownloadCV = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const uploadControls = useAnimation();
    const loadingControls = useAnimation();
    const doneControls = useAnimation();
    const loadingBarControls = useAnimation();

    const animate = async () => {

        setIsAnimating(true);
        uploadControls.start({ zIndex: 1 });
        await loadingControls.start({ top: 0, transition: { duration: 0.4 } });
        loadingBarControls.start({ width: '100%', transition: { duration: 1.1 } });

        // Make the download request
        try {
            const response = await fetch(
                `${import.meta.env.VITE_APP_BACKEND_URL}/documents/my-cv/Murad_Isayev_CV.pdf`
            );

            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Murad_Isayev_CV.pdf';
                a.click();

                await doneControls.start({
                    top: 0,
                    transition: { delay: 1.25, duration: 0.4 },
                });
                // Reset animation after a delay
                setTimeout(() => {
                    setIsAnimating(false);
                    uploadControls.start({ zIndex: 0 });
                    loadingControls.start({ top: '-100%', transition: { duration: 0 } });
                    loadingBarControls.start({ width: '0%', transition: { duration: 0 } });
                    doneControls.start({ top: '-100%', transition: { duration: 0.4 } });
                }, 1000); // Adjust the delay (in milliseconds) as needed
            } else {
                console.error('File download failed');
            }
        } catch (error) {
            console.error('Error occurred during file download:', error);
        }
    };

    return (
        <div className="download-button grid mt-2 rounded-md">
            <div className="wrapper rounded-md h-[3.3rem] w-[8.8rem] md:h-[2.5rem]
                             md:w-[5.8rem] overflow-hidden cursor-pointer relative" onClick={() => !isAnimating && animate()}>
                <AnimatePresence>
                    <motion.div
                        className="w-[100%] h-[100%] absolute gap-[.7rem] md:gap-[.5rem] text-[.85rem] md:text-[.75rem] overflow-hidden
                                     font-medium flex justify-center items-center rounded-md top-0 z-[1] 
                                     bg-[#dbdbdb] hover:bg-[#cfcfcf] dark:bg-[#F1F1F1] transition ease-linear duration-150"
                        animate={uploadControls}
                        whileHover="hovered"
                    >
                        <motion.div variants={iconVariants}><FaAngleDoubleDown className="icon text-sky-700 dark:text-black" /></motion.div>
                        <div className='dark:text-black text-sky-600'>CV</div>
                    </motion.div>
                    <motion.div className="w-[100%] flex justify-center text-[.85rem] md:text-[.7rem] font-medium overflow-hidden
                                         items-center rounded-md h-[100%] gap-[.7rem] md:gap-[.5rem] absolute z-[2] top-[-100%] 
                                         dark:bg-[#d1d1d1] bg-sky-700 dark:text-black"
                        animate={loadingControls}>
                        <div role="status">
                            <svg aria-hidden="true" class="inline w-[1.2rem] h-[1.2rem] md:w-[.9rem] md:h-[.9rem] text-sky-700 dark:text-[#d1d1d1] fill-white animate-spin dark:fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                        </div>
                        <div className='dark:text-black text-white'>Loading...</div>
                        <motion.div className="absolute left-0 top-[calc(100%-4px)] md:top-[calc(100%-3px)] bg-[#082f49] h-1 md:h-[3px] w-[0%] bottom-0" animate={loadingBarControls}>
                        </motion.div>
                    </motion.div>
                    <motion.div className="w-[100%] flex justify-center text-[.85rem] md:text-[.7rem] font-medium overflow-hidden
                                         items-center rounded-md gap-[.7rem] md:gap-[.5rem] h-[100%] absolute z-[3] top-[-100%] 
                                         dark:bg-[#919191] dark:text-black bg-sky-900 text-white"
                        animate={doneControls}>
                        <FaCheck className="icon" />
                        <div>DONE</div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div >
    );
};

export default DownloadCV;
