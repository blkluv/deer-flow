import { useMemo } from "react";

export function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="container-md mx-auto mt-32 flex flex-col items-center justify-center">
      <hr className="from-border/0 to-border/0 m-0 h-px w-full border-none bg-linear-to-r via-white/20" />
      <div className="text-muted-foreground container flex h-20 flex-col items-center justify-center text-sm">
        <p className="text-center font-serif text-lg md:text-xl">
          &quot;Three words for every property. One phone number for every lead. One social feed for the whole industry. That’s how we replaced the old real estate world. That’s CREmarket.io. &quot; - The Wizard of Hahz
        </p>
      </div>
      <div className="text-muted-foreground container mb-8 flex flex-col items-center justify-center text-xs">
        <p>Powered by</p>
        <p>&copy; {year} CREmarket.io</p>
      </div>
    </footer>
  );
}
