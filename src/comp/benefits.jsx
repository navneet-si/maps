import think from "../assets/think.webm"
export function Benefits(){
    return(
        <div className="shadow-2xl w-[90%] m-auto pb-[40px] -translate-y-20 ">
            <h4 className="text-4xl font-bold flex justify-center my-2 text-teal-950">
                <u>Why Us ?</u>
            </h4>
        <div className="flex  items-center w-[90%] m-auto border gap-x-10 py-2">
            <div>
                <video className="border-r " src={think} width="250px" height="300px" autoPlay loop muted />
            </div>
            <div>
                <ul className="font-semibold text-teal-800 list-disc">
                        <li>
                          <span className="text-[17px] text-teal-900"> <b> Seamless & Intuitive Experience </b></span>– Our site is designed for effortless navigation with a clean, user-friendly interface that makes finding what you need faster and easier.
                         </li>
                        <li>
                           <span className="text-[17px] text-teal-900"> <b>Interactive & Engaging</b> </span>– Unlike static alternatives, our platform offers dynamic elements, real-time updates, and interactive features that keep users engaged.
                         </li>
                        <li>
                           <span className="text-[17px] text-teal-900"> <b> Optimized for Speed & Performance </b></span>– With lightweight design and optimized code, our site loads quickly and runs smoothly, ensuring a hassle-free experience across all devices.
                        </li>
                </ul>
            </div>
        </div>
        </div>
    )
}