import { Heart, Copy, Check } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const bankDetails = [
  { label: "Account Holder", value: "Padmini Social Impact Foundation" },
  { label: "Account Number", value: "44894111807" },
  { label: "IFSC Code", value: "SBIN0000931" },
  { label: "Bank", value: "State Bank of India" },
];

interface DonateDialogProps {
  variant?: "header" | "mobile" | "cta";
}

const DonateDialog = ({ variant = "header" }: DonateDialogProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const handleCopy = (value: string, index: number) => {
    navigator.clipboard.writeText(value);
    setCopiedIndex(index);
    toast({ title: "Copied to clipboard!" });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const trigger =
    variant === "cta" ? (
      <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md text-lg px-8">
        <Heart className="w-5 h-5" />
        Support Our Mission
      </Button>
    ) : (
      <Button
        variant="default"
        size="default"
        className={`gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md ${variant === "mobile" ? "w-full mt-4" : ""}`}
      >
        <Heart className="w-4 h-4" />
        Donate
      </Button>
    );

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Heart className="w-5 h-5 text-primary" />
            Donate via Bank Transfer
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-1.5 text-sm text-muted-foreground bg-muted/30 border border-border rounded-lg p-3 mt-2">
          <p>Donations are accepted only in the name of <span className="font-medium text-foreground">Padmini Social Impact Foundation</span>.</p>
          <p>Official receipt will be issued for all contributions.</p>
          <p>For verification, contact us at <a href="mailto:psifnd@gmail.com" className="text-primary underline">psifnd@gmail.com</a></p>
        </div>
        <div className="space-y-3 mt-3">
          {bankDetails.map((item, i) => (
            <div
              key={item.label}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border"
            >
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="font-medium text-foreground">{item.value}</p>
              </div>
              <button
                onClick={() => handleCopy(item.value, i)}
                className="p-2 hover:bg-muted rounded-md transition-colors"
                aria-label={`Copy ${item.label}`}
              >
                {copiedIndex === i ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-4">
          Thank you for your generous contribution!
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default DonateDialog;
