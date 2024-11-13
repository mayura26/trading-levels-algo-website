// TODO: Add a form to send messages to the admin
// TODO: Spread out the form over the page

export default function Contact() {
    return (
      <div className="min-h-screen bg-[url('/trading-background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center p-8 text-white">
          <main className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 mt-8">
              <form className="space-y-6 text-left">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-black/30 border border-gray-600 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-black/30 border border-gray-600 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-black/30 border border-gray-600 focus:border-blue-500 focus:outline-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    );
  }