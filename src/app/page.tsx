import { Hero } from '@/components/landing/hero'
import { Hierarchy } from '@/components/landing/hierarchy'
import { Audience } from '@/components/landing/audience'
import { Journey } from '@/components/landing/journey'
import { AppSection } from '@/components/landing/app-section'
import { Comparison } from '@/components/landing/comparison'
import { CaseStudy } from '@/components/landing/case-study'
import { InlineCta } from '@/components/landing/inline-cta'
import { Investment } from '@/components/landing/investment'
import { Objections } from '@/components/landing/objections'
import { Faq } from '@/components/landing/faq'
import { Decision } from '@/components/landing/decision'

export default function Home() {
  return (
    <main>
      <Hero />
      <Hierarchy />
      <Audience />
      <InlineCta label="Se reconheces a tua leitura clínica nestes padrões." />
      <Journey />
      <AppSection />
      <Comparison />
      <CaseStudy />
      <InlineCta label="Quando estiveres pronta, é aqui que se começa." />
      <Investment />
      <Objections />
      <Faq />
      <Decision />
    </main>
  )
}
