import { UiContext } from '@/context/UiProvider';
import { ReactNode, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
export default function Main({children }: { children: ReactNode }) {
  const { aside, container } = useContext(UiContext)
  return (
    <main className={[
      'flex flex-col',
      container.align === 'left' && 'lg:mr-auto',
      container.align === 'right' && 'lg:ml-auto',
      container.align === 'center' && 'lg:mx-auto',
      container.align !== 'full' && 'lg:container'
    ].filter(c => !!c).join(' ')}
    >
      <Header />
      <div className={[
        'flex flex-nowrap',
        aside.align === 'left' && 'flex-row',
        aside.align === 'right' && 'flex-row-reverse'
      ].filter(c => !!c).join(' ')}
      >
        <aside className={'p-2 hidden md:block min-w-[200px] min-h-[calc(100vh-var(--header-height))]'}>
          <div className={'rounded-lg border-dotted border-2 p-2 min-h-[calc(100vh-2rem-var(--header-height))] sticky top-[var(--header-height)]'}>
            aside content
          </div>
        </aside>
        <section className={[
          'transition-all',
          'min-w-[220px] p-2 flex-auto',
          'min-h-[200vh]'
        ].filter(c => !!c).join(' ')}
        >
          <div className={'min-w-[220px] rounded-lg border-dotted border-2 h-full p-2'}>
            {children}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
