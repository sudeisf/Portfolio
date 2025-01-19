import Github from "@/assets/github.svg"


export default function GitNote() {
    return (
        <>
            <div 
            className="flex flex-col md:flex-row text-center mt-4 mb-4  text-sm py-20 md:text-2xl font-Rubik mx-auto md:my-10  "
            >
                <div className="mx-auto md:flex md:flex-row md:space-x-8 items-center">
                <p className="text-[.9rem] lg:text-2xl  font-Rubik">You can see more of my projects on my github profile</p>
                <div className=" text-center space-y-2 mx-auto flex md:flex-row items-center space-x-2">
                    <img src={Github} alt="github" className="w-6 h-6 lg:w-8 md:h-8 " /> 
                    <a href="https://github.com/sudeisf" className="font-Rubik text-sm hover:underline lg:text-2xl self-center">@SudeisF</a>
                <div>
                </div>
                </div>
                </div>
               
            </div>
        </>
    )
}