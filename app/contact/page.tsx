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
        </div>
    );
}