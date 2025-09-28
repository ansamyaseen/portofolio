export default function Contact() {
    return(
        <div className="form-container my-16 max-w-lg mx-auto px-4">
            <form className="form border border-white/20 bg-white/10 shadow-lg backdrop-filter 
            backdrop-blur-md shadow-2xl overflow-hidden p-8 rounded-lg">
                <p className="form-title mb-6 text-2xl font-bold text-center">Get In Touch </p>
            
                <div className="flex gap-4 mb-4">
                    <label className="flex-1">
                        <input className="input w-full" type="text" placeholder="" required />
                        <span>Firstname</span>
                    </label>

                    <label className="flex-1">
                        <input className="input w-full" type="text" placeholder="" required />
                        <span>Lastname</span>
                    </label>
                </div>  
                        
                <label className="block mb-4">
                    <input className="input w-full" type="email" placeholder="" required />
                    <span>Email</span>
                </label> 
                    
                <label className="block mb-4">
                    <input className="input w-full" type="password" placeholder="" required />
                    <span>Subject</span>
                </label>
                <label className="block mb-6">
                    <input className="input w-full h-20" type="password" placeholder="" required />
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
    );
}
    