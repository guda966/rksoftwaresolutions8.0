import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export function JobAlertPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    /* Show only once per browser session */
    const seen = sessionStorage.getItem("rk_job_popup_seen");
    if (seen) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("rk_job_popup_seen", "1");
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="fixed z-[70] inset-0 flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="pointer-events-auto w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden mx-4">

              {/* Navy header */}
              <div className="relative bg-primary px-5 sm:px-7 pt-6 sm:pt-8 pb-8 sm:pb-10 overflow-hidden text-white">
                {/* Dot texture */}
                <div
                  className="absolute inset-0 opacity-[0.07] pointer-events-none"
                  style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "22px 22px" }}
                />
                {/* Glow blobs */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                {/* Close button */}
                <button
                  onClick={dismiss}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-1.5"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                {/* Icon + badge */}
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="w-11 h-11 bg-accent/25 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase size={20} className="text-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/15 border border-accent/25 px-3 py-1 rounded-full">
                    We're Growing!
                  </span>
                </div>

                <h2 className="text-2xl font-display font-bold text-white leading-snug mb-1.5 relative z-10">
                  Stay Ahead of<br />Job Openings
                </h2>
                <p className="text-white/65 text-sm leading-relaxed relative z-10">
                  No openings right now — but new roles at RK Software Solutions are coming soon. Be first to know.
                </p>
              </div>

              {/* Body */}
              <div className="px-5 sm:px-7 py-5 sm:py-6">
                {done ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-4"
                  >
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 size={28} className="text-green-600" />
                    </div>
                    <h3 className="font-bold text-primary text-lg mb-1">You're on the list!</h3>
                    <p className="text-muted-foreground text-sm mb-5">
                      We'll email you the moment a new role opens up at RK Software Solutions.
                    </p>
                    <Button
                      onClick={dismiss}
                      className="bg-primary text-white font-bold px-8 hover:bg-primary/90"
                    >
                      Got it, thanks!
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <p className="text-sm font-semibold text-primary mb-3">
                      Get notified by email — it's free & instant:
                    </p>

                    <form onSubmit={handleSubmit} className="flex gap-2 mb-5">
                      <Input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="flex-1"
                      />
                      <Button
                        type="submit"
                        className="bg-primary text-white font-bold px-4 hover:bg-primary/90 flex-shrink-0"
                      >
                        <Bell size={15} />
                      </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-1 h-px bg-border" />
                      <span className="text-xs text-muted-foreground">or</span>
                      <div className="flex-1 h-px bg-border" />
                    </div>

                    {/* CTA to Careers page */}
                    <Link href="/careers" onClick={dismiss}>
                      <Button
                        variant="outline"
                        className="w-full border-primary/20 text-primary hover:bg-primary/5 font-semibold gap-2"
                      >
                        <Briefcase size={15} />
                        View Careers Page
                        <ArrowRight size={14} className="ml-auto" />
                      </Button>
                    </Link>

                    <p className="text-center text-[11px] text-muted-foreground mt-4">
                      No spam. Unsubscribe anytime. Just one email per new opening.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
