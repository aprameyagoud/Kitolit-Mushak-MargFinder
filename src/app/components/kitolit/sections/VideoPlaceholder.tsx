import { useState } from "react";
import { Mandala } from "../decor";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

export function VideoPlaceholder() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Place your video file inside `public/videos/promo.mp4`
  const videoUrl = "/videos/promo.mp4";

  return (
    <section className="relative w-full bg-gradient-to-b from-[#FFF0DD] to-transparent">
      <div className="relative mx-auto max-w-4xl px-5 pt-16 pb-16 sm:pt-24 sm:pb-24">
        <figure className="relative aspect-[9/16] sm:aspect-video w-full mx-auto max-w-[400px] sm:max-w-none overflow-hidden rounded-[2rem] bg-black shadow-2xl sm:rounded-[2.5rem]">
          {!isPlaying ? (
            <div 
              className="absolute inset-0 cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              <ImageWithFallback
                src="/images/video_thumb.png"
                alt="Indian children crafting Eco Tech Ganesha together during workshop"
                className="absolute inset-0 h-full w-full object-cover sm:object-contain opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M20 20.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z%22 fill=%22%23FFF%22 fill-opacity=%220.1%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')] opacity-30 mix-blend-overlay" />

              <Mandala spin className="absolute -left-32 -top-32 w-[600px] text-white opacity-5" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white transition-transform duration-300 group-hover:scale-105">
                <div className="relative grid size-20 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md sm:size-24 shadow-xl" aria-hidden="true">
                  <span className="absolute inset-0 rounded-full bg-white/20 opacity-50 motion-safe:animate-ping" />
                  <svg className="size-12 opacity-90 sm:size-14 ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-6 font-[family:var(--font-display)] text-xl font-bold tracking-wide sm:text-2xl drop-shadow-md">See the magic in action</p>
                <p className="mt-2 text-sm text-white/90 sm:text-base drop-shadow-md font-medium">Watch the workshop promo</p>
              </div>
            </div>
          ) : (
            <video
              src={videoUrl}
              className="h-full w-full object-contain"
              controls
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          )}
        </figure>
      </div>
    </section>
  );
}