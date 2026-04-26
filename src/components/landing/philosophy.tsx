import { Section } from './primitives'

type PhilosophyProps = {
  videoSrc?: string
  posterSrc?: string
}

export function Philosophy({ videoSrc, posterSrc }: PhilosophyProps) {
  return (
    <Section narrow className="border-y border-[var(--color-gold)]/30">
      <p className="eyebrow text-[var(--color-gold-deep)]">A nossa convicção</p>

      <h2 className="mt-8 text-[clamp(1.85rem,4vw,2.5rem)] leading-[1.2] tracking-[-0.01em]">
        Antes da mecânica,{' '}
        <span className="editorial-italic">três coisas</span> em que
        acreditamos.
      </h2>

      <p className="mt-6 text-base leading-[1.65] text-[var(--color-aux)] md:text-lg">
        Não como manifesto. Como prática clínica diária.
      </p>

      {videoSrc && (
        <div className="mt-16 aspect-video w-full overflow-hidden border border-[var(--color-gold)]/40">
          <video
            src={videoSrc}
            poster={posterSrc}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <article className="mt-20 space-y-6 text-[16px] leading-[1.7] text-[var(--color-body)] md:text-[17px]">
        <h3 className="font-[family-name:var(--font-display)] text-2xl leading-[1.25] text-[var(--color-ink)]">
          O nome <span className="editorial-italic">não é decorativo</span>.
        </h3>
        <p>
          <em className="editorial-italic">Aletheia</em> é uma palavra grega
          antiga. Costuma traduzir-se como "verdade", mas o significado
          original é mais preciso: <em>aquilo que deixa de estar oculto</em>.
        </p>
        <p>
          Adoptámo-lo porque descreve o que o programa faz. Os teus sintomas
          não são novos. Os marcadores que os explicam, na maioria dos casos,
          também não. O que muda é a leitura.
        </p>
      </article>

      <article className="mt-20 space-y-6 text-[16px] leading-[1.7] text-[var(--color-body)] md:text-[17px]">
        <h3 className="font-[family-name:var(--font-display)] text-2xl leading-[1.25] text-[var(--color-ink)]">
          "Dentro do intervalo" <span className="editorial-italic">não é</span>{' '}
          saúde.
        </h3>
        <p>
          Em medicina convencional, um valor dentro do intervalo de
          referência é normal. Em medicina funcional, há dois intervalos: o
          intervalo de <em>doença declarada</em>, onde o sistema convencional
          intervém, e o intervalo <em>óptimo</em>, onde o corpo funciona com
          folga.
        </p>
        <p>
          Entre os dois há uma faixa onde milhares de mulheres vivem — com
          sintomas reais e relatórios laboratoriais ditos normais. TSH a 3.8.
          Ferritina a 28. Cortisol matinal no limite superior. Tecnicamente
          dentro. Funcionalmente, não.
        </p>
        <p>É aí que trabalhamos.</p>
      </article>

      <article className="mt-20 space-y-6 text-[16px] leading-[1.7] text-[var(--color-body)] md:text-[17px]">
        <h3 className="font-[family-name:var(--font-display)] text-2xl leading-[1.25] text-[var(--color-ink)]">
          O tempo é{' '}
          <span className="editorial-italic">instrumento clínico</span>.
        </h3>
        <p>
          A biologia não responde a consultas avulso. Responde a sequência,
          repetição e tempo. Reconstruir a barreira intestinal são semanas.
          Recuperar o eixo HPA, meses. Estabilizar o ciclo hormonal, mais
          alguns.
        </p>
        <p>
          Não há atalho que não cobre depois. O programa é desenhado para
          esse arco — com presença clínica entre as decisões, não apenas
          dentro de consultas isoladas.
        </p>
      </article>
    </Section>
  )
}
