import { useState, useEffect, useRef } from "react";
import Button from "../../components/ReUsable/Button";

const SignupForm = () => {
    const [checkedIndex, setCheckedIndex] = useState(null);
    const boxRefs = useRef([]);
    const formRef = useRef(null);

    const toggleCheck = (index) => {
        setCheckedIndex((prev) => (prev === index ? null : index));
    };

    const handleClickOutside = (event) => {
        if (
            !boxRefs.current.some((ref) => ref?.contains(event.target)) &&
            !formRef.current?.contains(event.target)
        ) {
            setCheckedIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const checkContent = [
        {
            title: "Artisan",
            subTitle: "Apply for top company and menial jobs"
        },
        {
            title: "Client",
            subTitle: "Hire top artisans for menial jobs"
        }
    ];

    return (
        <>
            <form ref={formRef}>
                {checkContent.map((check, index) => (
                    <div
                        key={index}
                        ref={(el) => (boxRefs.current[index] = el)}
                        onClick={() => toggleCheck(index)}
                        role="checkbox"
                        aria-checked={checkedIndex === index}
                        className={`h-[94px] rounded-[6px] cursor-pointer shadow-md mb-2 p-4 flex justify-between items-start transition-all border-[1px] ${
                            checkedIndex === index
                                ? 'border-[#5900D9] bg-transparent'
                                : 'border-[#EFE6FD] bg-transparent'
                        }`}
                    >
                        <div>
                            <h6 className="font-[700] md:text-[20px] text-[18px] text-[#000000]">{check.title}</h6>
                            <p className="font-normal text-[#423359] md:text-base text-[14px]">{check.subTitle}</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={checkedIndex === index}
                            readOnly
                            className="custom-checkbox"
                        />
                    </div>
                ))}
                <Button
                    className={`text-base font-[700] mt-5 transition-colors duration-300 ${
                        checkedIndex !== null
                            ? 'bg-[#5900D9] text-white'
                            : 'bg-[#E7E6EA] text-[#928A9F]'
                    }`}
                >
                    Continue
                </Button>
            </form>
        </>
    );
};

export default SignupForm;
