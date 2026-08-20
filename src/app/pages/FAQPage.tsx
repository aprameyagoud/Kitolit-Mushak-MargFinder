import { PolicyLayout } from "../components/kitolit/PolicyLayout";

export function FAQPage() {
  return (
    <PolicyLayout title="Frequently Asked Questions">
      <div className="space-y-6">
        <div>
          <h3>What age group is this workshop for?</h3>
          <p>The workshop is designed for children aged 6 to 13. Younger kids can join with light parental help during unboxing and assembly.</p>
        </div>
        
        <div>
          <h3>Is it really online and live?</h3>
          <p>Yes — it's a live, instructor-led group video session. Your child builds alongside the instructor in real time, not a pre-recorded video.</p>
        </div>
        
        <div>
          <h3>Do we need to buy anything else?</h3>
          <p>No. Every part — Eco Tech Ganesha pieces, paints, Magical MushakBot companion parts, tools, and glue — arrives free in the activity material box before class.</p>
        </div>
        
        <div>
          <h3>Is any prior building or technical experience needed?</h3>
          <p>Not at all. The Magical MushakBot uses snap-together, beginner-friendly parts designed for easy assembly with no prior experience needed.</p>
        </div>
        
        <div>
          <h3>When will the material arrive?</h3>
          <p>We ship the free activity material to your home a few days before your chosen batch so you're ready on the day.</p>
        </div>
        
        <div>
          <h3>What if my child needs help during the session?</h3>
          <p>Batches are kept small and our instructors pause to help. You'll also get a recording and support on WhatsApp.</p>
        </div>
      </div>
    </PolicyLayout>
  );
}
