'use client'

import { useState } from 'react'
import { Section, Eyebrow } from './primitives'

const faqs = [
  {
    q: 'Recebi o convite. O que significa exactamente?',
    a: 'Significa que, na leitura clínica das tuas análises e da nossa segunda consulta, o teu caso encaixa no que o programa Aletheia faz. O convite é a proposta formal — não uma sugestão genérica. Se vens daí, vens já com terreno preparado.',
  },
  {
    q: 'E se eu disser que não — perco a relação clínica?',
    a: 'Não. A relação clínica que já existe continua. Podes seguir em consultas avulso quando precisares, ou recusar o programa agora e voltar a considerá-lo mais tarde. O convite não tem prazo emocional.',
  },
  {
    q: 'Posso experimentar um mês e desistir?',
    a: 'Sim. A subscrição é mensal e cancelável. Mas é importante saber: o primeiro mês é, por construção, configuração — a app, o terreno intestinal, os primeiros ajustes. O retorno clínico do programa lê-se a partir do mês dois ou três.',
  },
  {
    q: 'E se preciso de mais que três meses?',
    a: 'A duração não é fixa. Casos com mais camadas — autoimunidade activa, perimenopausa instável, exaustão adrenal profunda — pedem entre seis e doze meses para se reorganizarem. Definimos o horizonte no teu plano terapêutico, não num contrato.',
  },
  {
    q: 'A app é obrigatória?',
    a: 'Sim. A app não é um extra — é onde a continuidade clínica acontece. Sem ela, o programa volta a ser uma sucessão de consultas. Não é por preferência tecnológica; é estrutural.',
  },
  {
    q: 'Posso usar o seguro de saúde?',
    a: 'Algumas seguradoras reembolsam parcialmente as consultas individuais. A subscrição mensal e a app não são, hoje, comparticipadas. Emitimos as facturas necessárias para que apresentes ao teu seguro.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section warm id="faq">
      <Eyebrow number="08">Dúvidas frequentes</Eyebrow>

      <h2 className="mt-8 max-w-[760px] text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.18] tracking-[-0.01em]">
        O que costuma{' '}
        <span className="editorial-italic">surgir</span>, depois do convite.
      </h2>

      <div className="mt-16 border-t border-[var(--color-gold)]/40">
        {faqs.map((faq, i) => {
          const open = openIndex === i
          return (
            <div
              key={faq.q}
              className="border-b border-[var(--color-gold)]/30"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-[var(--color-gold-deep)] md:py-9"
              >
                <span className="font-[family-name:var(--font-display)] text-[1.1rem] leading-[1.3] text-[var(--color-ink)] md:text-[1.35rem]">
                  {faq.q}
                </span>
                <span
                  aria-hidden
                  className={`relative inline-block h-3 w-3 shrink-0 transition-transform duration-300 ${
                    open ? 'rotate-45' : ''
                  }`}
                >
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-[var(--color-gold-deep)]" />
                  <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-[var(--color-gold-deep)]" />
                </span>
              </button>

              <div
                className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out ${
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="min-h-0">
                  <p className="max-w-[68ch] pr-10 pb-9 text-[15px] leading-[1.7] text-[var(--color-body)] md:text-[16px]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
