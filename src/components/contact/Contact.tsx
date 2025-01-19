import emailjs from "emailjs-com";
export default function Contact() {

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_c6ncekr",   // Replace with your EmailJS Service ID
            "template_m9owdq6",  // Replace with your EmailJS Template ID
            e.target as HTMLFormElement,
            "773RISmpvg-GT0RU1"    // Replace with your EmailJS Public Key
          )
          .then(
            (result) => {
              console.log("Email sent successfully:", result.text);
              alert("Message sent successfully!");
            },
            (error) => {
              console.error("Failed to send email:", error.text);
              alert("Failed to send the message. Please try again later.");
            }
          );
    
        // Reset the form after submission
        (e.target as HTMLFormElement).reset();
      };

    return (
        <>
            <div className="md:mb-20">
                <h1 className="py-12 text-lg text-center mb-4 md:text-3xl">Let's connect and bring ideas to life!</h1>
                <div className="md:flex md:flex-row md:space-x-8">
                <div className="bg-[#1e1e1e] md:w-[50%] h-[350px] mt-8  mx-auto  text-white p-8 md:p-3 text-sm font-Rubik space-y-4 md:space-y-0 " >
                    <h1 className="text-3xl text-center justify-center pt-5">Contact me</h1>
                    <p className="text-justify text-[.8rem] md:text-md lg:text-xl md:p-8 lg:text-left">
                    Have a project in mind? Or maybe just want to say hi? I'd love to hear from you! Feel free to drop me a message at
                     sudedevop@gmail.com or connect with me on LinkedIn. I'm always excited to collaborate and explore new ideas. Let's talk
                    </p>
                </div>

                <div className="md:w-[50%] h-[350px] mt-8  mb-8  mx-auto   text-white p-8 md:p-3 text-sm font-Rubik">
                <form className="flex flex-col space-y-4 mx-auto" onSubmit={sendEmail}>
                    <input type="email" name="user_email"  placeholder="Email" className="bg-[#D9D9D9] text-black pl-2 lg:text-lg w-[80%] lg:w-[70%] h-8 lg:h-12 rounded-sm  mx-auto "/>
                    <textarea
                        name="message"
                        placeholder="Write Your Message Here"
                        className="bg-[#D9D9D9] text-black pt-2 lg:text-lg pl-2 w-[80%] lg:w-[70%] h-32 rounded-sm placeholder:text-md  mx-auto"
                    >
                    </textarea>
                    <button className="bg-[#1e1e1e] w-[80%] lg:w-[70%]  h-10 lg:h-12 md:text-md capitalize rounded-sm text-white mx-auto">
                        submit
                    </button>
                </form>
                </div>
                </div>          
            </div>
        </>
    )
}