import { Hero } from '@/components/landing/hero'
import { Whispers } from '@/components/landing/whispers'
import { Outcomes } from '@/components/landing/outcomes'
import { CaseStudy } from '@/components/landing/case-study'
import { DataLayers } from '@/components/landing/data-layers'
import { Hierarchy } from '@/components/landing/hierarchy'
import { AppSection } from '@/components/landing/app-section'
import { Comparison } from '@/components/landing/comparison'
import { Investment } from '@/components/landing/investment'
import { Journey } from '@/components/landing/journey'
import { Testimonials } from '@/components/landing/testimonials'
import { Faq } from '@/components/landing/faq'
import { Decision } from '@/components/landing/decision'

export default function Home() {
  return (
    <main>
      <Hero />
      <Whispers />
      <Outcomes />
      <CaseStudy />
      <DataLayers />
      <Hierarchy />
      <AppSection />
      <Comparison />
      <Investment />
      <Journey />
      <Testimonials />
      <Faq />
      <Decision />
    </main>
  )
}
