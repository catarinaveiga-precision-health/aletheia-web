import { Hero } from '@/components/landing/hero'
import { Hierarchy } from '@/components/landing/hierarchy'
import { Journey } from '@/components/landing/journey'
import { AppSection } from '@/components/landing/app-section'
import { Comparison } from '@/components/landing/comparison'
import { CaseStudy } from '@/components/landing/case-study'
import { Investment } from '@/components/landing/investment'
import { Faq } from '@/components/landing/faq'
import { Decision } from '@/components/landing/decision'

export default function Home() {
  return (
    <main>
      <Hero />
      <Hierarchy />
      <Journey />
      <AppSection />
      <Comparison />
      <CaseStudy />
      <Investment />
      <Faq />
      <Decision />
    </main>
  )
}
