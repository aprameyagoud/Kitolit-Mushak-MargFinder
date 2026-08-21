import { PolicyLayout } from "../components/kitolit/PolicyLayout";
import { Link } from "react-router";

export function AboutPage() {
  return (
    <PolicyLayout title="About Kitolit">
      <p className="text-xl leading-relaxed text-[color:var(--foreground)] mb-10">
        We believe that the best way to understand the world of technology is to build it yourself. KITOLIT PRIVATE LIMITED (“Kitolit”, “we”, “us”, or “our”) is focused on providing practical, hands-on learning experiences that bring engineering concepts to life for young learners.
      </p>

      <h2>What We Do</h2>
      <p>
        Kitolit creates educational pathways centered around Science, Technology, Engineering, and Mathematics (STEM). Our primary focus is on practical STEM learning, introducing concepts like robotics, artificial intelligence (AI), and the Internet of Things (IoT) through carefully designed educational kits, interactive workshops, and guided learning experiences. We aim to demystify technology by putting the tools directly into the hands of students.
      </p>

      <h2>Our Learning Approach</h2>
      <p>
        Our methodology is built on active participation. We emphasize learning by building, experimenting, and engaging with physical components. Rather than focusing solely on theoretical instruction, we provide platforms where learners can assemble mechanisms, wire circuits, and see the immediate results of their work. This hands-on engagement is designed to cultivate problem-solving skills, patience, and a deeper understanding of how modern technology functions.
      </p>

      <h2>Why Hands-On Learning</h2>
      <p>
        Practical exploration is a fundamental aspect of understanding complex systems. By interacting with tactile components and facing real-world assembly challenges, learners are encouraged to think critically and adapt. Hands-on learning bridges the gap between abstract concepts and concrete reality, offering a tangible sense of accomplishment and fostering a natural, self-driven curiosity about engineering and technology.
      </p>

      <h2>Workshops and Learning Experiences</h2>
      <p>
        We conduct structured educational experiences designed to make learning both culturally relevant and technologically engaging. A prime example is our Eco Tech Ganesha Workshop, where participants craft traditional eco-friendly models and pair them with introductory robotics, such as building a Magical MushakBot companion. These experiences are crafted to be accessible, enjoyable, and educational.
      </p>

      <div className="mt-16 rounded-2xl bg-white border border-[color:var(--border)] p-8 text-center shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
        <h3 className="mt-0 mb-4 text-2xl">Have a question?</h3>
        <p className="mb-6">Our support team is here to help with any inquiries about our kits or workshops.</p>
        <Link 
          to="/contact" 
          className="inline-flex items-center justify-center rounded-xl bg-[color:var(--brand-red)] px-6 py-3 font-medium text-white shadow-md hover:bg-[color:var(--brand-red)]/90 transition-colors"
        >
          Contact our support team
        </Link>
      </div>
    </PolicyLayout>
  );
}
