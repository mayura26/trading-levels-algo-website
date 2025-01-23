'use client'

import { Input, Textarea, Button } from "@nextui-org/react";
import { useRef, useState } from "react";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setIsSubmitting(true);
      setMessage(null);

      try {
        const response = await fetch('https://formspree.io/f/mgveyrvk', {
          method: 'POST',
          body: new FormData(e.currentTarget),
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          setMessage({ type: 'success', text: 'Thank you for your message! We\'ll get back to you soon.' });
          formRef.current?.reset();
        } else {
          setMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
        }
      } catch {
        setMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }

    return (
      <div>
        <section className="max-w-[1200px] mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 pb-2 border-b-2 border-primary">
            Contact Us
          </h1>
          <div className="bg-black/30 backdrop-blur-sm rounded-md p-4 sm:p-8 mt-4 sm:mt-8">
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 sm:space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Input
                  name="name"
                  type="text"
                  label="Name"
                  labelPlacement="outside"
                  placeholder="Enter your name"
                  isRequired
                  radius="sm"
                  classNames={{
                    input: "bg-black/30 text-white",
                    label: "text-white",
                    inputWrapper: "border border-white/20 hover:border-white/40 transition-colors",
                  }}
                />
                
                <Input
                  name="email"
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  placeholder="Enter your email"
                  isRequired
                  radius="sm"
                  classNames={{
                    input: "bg-black/30 text-white",
                    label: "text-white",
                    inputWrapper: "border border-white/20 hover:border-white/40 transition-colors",
                  }}
                />
              </div>

              <Textarea
                name="message"
                label="Message"
                labelPlacement="outside"
                placeholder="Type your message here..."
                minRows={8}
                isRequired
                radius="sm"
                classNames={{
                  input: "bg-black/30 text-white",
                  label: "text-white",
                  inputWrapper: "border border-white/20 hover:border-white/40 transition-colors",
                }}
              />
              
              {message && (
                <div 
                  className={`p-4 rounded-md ${
                    message.type === 'success' 
                      ? 'bg-green-500/20 text-green-200' 
                      : 'bg-red-500/20 text-red-200'
                  }`}
                >
                  {message.text}
                </div>
              )}

              <Button
                type="submit"
                color="primary"
                size="lg"
                radius="sm"
                className="w-full md:w-auto md:min-w-[200px] font-medium"
                isLoading={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-4 pb-8">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-6 pb-2 border-b-2 border-primary">
            Connect With Us
          </h2>
          <div className="flex flex-col items-center gap-4">
            <a 
              href="https://discord.com/users/toofast" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 hover:bg-black/40 transition-colors border border-white/20 hover:border-white/40"
            >
              <svg className="w-5 h-5 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span className="text-primary font-medium">toofast</span>
            </a>
            <a 
              href="https://instagram.com/TradingLevelsAlgo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black/30 hover:bg-black/40 transition-colors border border-white/20 hover:border-white/40"
            >
              <svg className="w-5 h-5 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-primary font-medium">TradingLevelsAlgo</span>
            </a>
          </div>
        </section>
      </div>
    );
}