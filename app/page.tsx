import Hero from '@/components/Hero'
import AcademySection from '@/components/AcademySection'
import FeatureGrid from '@/components/FeatureGrid'
import SpeedTimeline from '@/components/SpeedTimeline'
import IterationCircle from '@/components/IterationCircle'
import AgentsSection from '@/components/AgentsSection'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import CTA from '@/components/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AcademySection />
      <FeatureGrid />
      <SpeedTimeline />
      <IterationCircle />
      <AgentsSection />
      <Testimonials />
      <CTA />
      <Newsletter />
    </>
  )
}
