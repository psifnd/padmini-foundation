import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Copy message to clipboard and show email
    const fullMessage = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    try {
      await navigator.clipboard.writeText(fullMessage);
      toast({
        title: "Message copied to clipboard!",
        description: "Please paste it in an email to psifnd@gmail.com",
      });
    } catch {
      // Fallback: try mailto
      const subject = encodeURIComponent(`Message from ${name} via Website`);
      const body = encodeURIComponent(fullMessage);
      const mailtoLink = `mailto:psifnd@gmail.com?subject=${subject}&body=${body}`;
      const a = document.createElement("a");
      a.href = mailtoLink;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast({
        title: "Opening email client...",
        description: "Please send the pre-filled email to psifnd@gmail.com",
      });
    }

    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <h3 className="font-semibold text-lg">Chat with us</h3>
            <p className="text-sm opacity-90">We'll respond via email</p>
          </div>

          {/* Chat Form */}
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div>
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-muted/50"
                maxLength={100}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted/50"
                maxLength={255}
              />
            </div>
            <div>
              <Textarea
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-muted/50 min-h-[100px] resize-none"
                maxLength={1000}
              />
            </div>
            <Button type="submit" className="w-full gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>

          {/* Footer */}
          <div className="px-4 pb-4">
            <p className="text-xs text-muted-foreground text-center">
              Padmini Social Impact Foundation
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
