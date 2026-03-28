import { Star, ExternalLink, PenLine } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

/* ── Links – client should replace these with the actual Google Business Profile links ── */
const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/RK+Software+Solutions/@17.4396746,78.4408251,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb918904b99407:0xf7b6427f4281c2fc!8m2!3d17.4396746!4d78.4408251!16s%2Fg%2F11pzrrr3g0";

const GOOGLE_WRITE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJB5S5BImRyzsR_MKBQn9Ctvc";

/* ── Review data ── */
const reviews = [
  {
    name: "Srikanth Reddy",
    avatar: "SR",
    color: "#4285F4",
    rating: 5,
    date: "2 weeks ago",
    text: "Best institute for software training in Hyderabad. The faculty is highly experienced and the placement support is outstanding. Got placed in TCS within 45 days!",
  },
  {
    name: "Priya Lakshmi",
    avatar: "PL",
    color: "#EA4335",
    rating: 5,
    date: "1 month ago",
    text: "Excellent training environment. The hands-on project approach is what makes RK Software Solutions stand out. Highly recommend for anyone looking to switch to IT.",
  },
  {
    name: "Mohammed Fahad",
    avatar: "MF",
    color: "#34A853",
    rating: 5,
    date: "1 month ago",
    text: "Very professional institute. The trainers explain complex concepts in simple language. The mock interviews prepared me well. Placed at Wipro after the course!",
  },
  {
    name: "Anjali Sharma",
    avatar: "AS",
    color: "#FBBC05",
    rating: 5,
    date: "2 months ago",
    text: "Joined for Digital Marketing and the course content was very practical and updated. The batch schedule is flexible too. Great experience overall!",
  },
];

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function StarRow({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} className={i < count ? "fill-[#FBBC05] text-[#FBBC05]" : "text-gray-200 fill-gray-200"} />
      ))}
    </div>
  );
}

interface GoogleReviewsProps {
  compact?: boolean;
}

export function GoogleReviews({ compact = false }: GoogleReviewsProps) {
  if (compact) {
    /* ── Compact strip for other pages ── */
    return (
      <a href={GOOGLE_MAPS_REVIEWS_URL} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-white border border-border rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow group">
        <GoogleLogo />
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-gray-800 text-sm">5.0</span>
            <StarRow count={5} size={13} />
          </div>
          <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Rated on Google · View reviews</p>
        </div>
        <ExternalLink size={14} className="text-muted-foreground ml-1 group-hover:text-primary transition-colors" />
      </a>
    );
  }

  /* ── Full reviews section ── */
  return (
    <div>
      {/* Header row */}
      <FadeIn className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3 bg-white border border-border rounded-2xl px-5 py-4 shadow-sm">
            <GoogleLogo />
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Google Rating</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-gray-900">5.0</span>
                <StarRow count={5} size={18} />
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">Based on Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href={GOOGLE_MAPS_REVIEWS_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-border text-sm font-semibold text-gray-700 hover:border-[#4285F4]/40 hover:bg-[#4285F4]/5 hover:text-[#4285F4] transition-all shadow-sm">
            <ExternalLink size={14} /> See all reviews on Google
          </a>
          <a href={GOOGLE_WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4285F4] text-white text-sm font-bold hover:bg-[#3367D6] transition-colors shadow-md">
            <PenLine size={14} /> Write a Review
          </a>
        </div>
      </FadeIn>

      {/* Review cards */}
      <div className="grid sm:grid-cols-2 gap-5">
        {reviews.map((r, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl border border-border p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Reviewer info */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: r.color }}>
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.date}</p>
                  </div>
                </div>
                <GoogleLogo />
              </div>

              <StarRow count={r.rating} size={14} />

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {r.text}
              </p>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      {/* CTA strip at bottom */}
      <FadeIn delay={0.3} className="mt-8 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Satisfied with your experience? Help others find us by sharing your review.
        </p>
        <a href={GOOGLE_WRITE_REVIEW_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#4285F4] text-white font-bold hover:bg-[#3367D6] transition-colors shadow-xl shadow-[#4285F4]/20">
          <PenLine size={16} /> Leave a Review on Google
        </a>
      </FadeIn>
    </div>
  );
}
