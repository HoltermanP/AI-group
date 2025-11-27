import Hero from '@/components/Hero'
import FeatureGrid from '@/components/FeatureGrid'
import SpeedTimeline from '@/components/SpeedTimeline'
import TriangleOfPower from '@/components/TriangleOfPower'
import IterationCircle from '@/components/IterationCircle'
import AIComponents from '@/components/AIComponents'
import AgentsSection from '@/components/AgentsSection'
import CasesGrid from '@/components/CasesGrid'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import CTA from '@/components/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <SpeedTimeline />
      <TriangleOfPower />
      <IterationCircle />
      <AIComponents />
      <AgentsSection />
      <CasesGrid />
      <Testimonials />
      <CTA />
      <Newsletter />
    </>
  )
}
