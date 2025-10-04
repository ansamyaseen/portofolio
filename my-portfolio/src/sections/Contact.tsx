import { Globe } from "../components/Globe";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* الكرة على اليسار */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Globe />
        </div>

        {/* الفورم على اليمين */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <form className="form border border-white/20 bg-white/10 shadow-lg backdrop-filter 
          backdrop-blur-md shadow-2xl overflow-hidden p-8 rounded-lg w-full max-w-md">
            
            <p className="form-title mb-6 text-2xl font-bold text-center">Get In Touch </p>
        
            <div className="flex gap-4 mb-4">
              <label className="flex-1">
                <input className="input w-full" type="text" required />
                <span>Firstname</span>
              </label>

              <label className="flex-1">
                <input className="input w-full" type="text" required />
                <span>Lastname</span>
              </label>
            </div> 
                    
            <label className="block mb-4">
              <input className="input w-full" type="email" required />
              <span>Email</span>
            </label> 
                
            <label className="block mb-4">
              <input className="input w-full" type="text" required />
              <span>Subject</span>
            </label>

            <label className="block mb-6">
              <textarea className="input w-full h-24" required></textarea>
              <span>Message</span>
            </label>
        
            <button className="submit w-full flex items-center justify-center gap-2 py-2">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
