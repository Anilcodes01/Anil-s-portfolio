export default function Contact({ isDarkMode }: { isDarkMode: boolean }) {
    return (
      <div className={`flex justify-center ${isDarkMode ? ' text-white' : 'bg-white text-black'}`}>
        <div className="w-full text-center">
          <div className="text-4xl font-bold">Get in Touch</div>
          <div className="text-md mt-1 flex w-full justify-center">
            <p>Wanna contact with me? Just shoot me a dm on 
            <a href="https://x.com/Anilcodes01">
              <span className="text-blue-400 ml-1 hover:underline cursor-pointer">Twitter</span>
            </a>
            </p>
           
          </div>
        </div>
      </div>
    );
  }
  