import {Send} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_nvfzbgj",
        "template_r5an66n",
        formRef.current,
        "lLvFu41Qe0e1Qq20D"
      );

      if (result.text === "OK") {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        formRef.current.reset();
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
          Let’s <span className="text-primary">Connect</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Drop me a message and
          let’s build something amazing together 🚀
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="backdrop-blur-md bg-card/70 p-10 rounded-2xl shadow-lg border border-border/40">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 text-center max-w-full">
              {[
                {
                  label: "Email",
                  value: "omar.farouk.dahmani.contact@gmail.com",
                  link: "mailto:omar.farouk.dahmani.contact@gmail.com",
                },
                {
                  label: "Phone",
                  value: "+216 93 992 373",
                  link: "tel:+21693992373",
                },
                {
                  label: "Location",
                  value: "Ras El Kef, Gafsa, Tunisia",
                },
              ].map((item, i) => (
                <div key={i} className="break-words">
                  <h4 className="font-semibold text-lg text-primary">{item.label}</h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors block break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground break-words">{item.value}</p>
                  )}
                </div>
              ))}
            </div>



            {/* Social Icons */}
            <div className="pt-10">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                {[
                  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/omar-farouk-dahmani/", color: "text-blue-600" },
                  { Icon: FaGithub, link: "https://github.com/OmarFaroukDahmani", color: "text-gray-700 " },
                  { Icon: SiUpwork, link: "https://upwork.com/freelancers/~013077f0433bc70d9e", color: "text-green-600" },
                ].map(({ Icon, link, color }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-transform transform hover:scale-110`}
                  >
                    <Icon className= {`w-9 h-9 ${color}`}  />
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-10 rounded-2xl shadow-xl border border-border/40">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background shadow-sm focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background shadow-sm focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background shadow-sm focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 py-3 text-lg font-medium rounded-lg transition-all duration-300",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
