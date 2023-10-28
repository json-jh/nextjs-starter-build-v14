import { UiContext } from '@/context/UiProvider';
import { ReactNode, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
export default function Main({children }: { children: ReactNode }) {
  const { aside, container } = useContext(UiContext)
  return (
    <main className={[
      'flex flex-col',
      container.align === 'left' && 'mr-auto',
      container.align === 'right' && 'ml-auto',
      container.align === 'center' && 'mx-auto',
      container.align !== 'full' && 'container'
    ].filter(c => !!c).join(' ')}
    >
      <Header />
      <div className={[
        'flex flex-nowrap',
        aside.align === 'left' && 'flex-row',
        aside.align === 'right' && 'flex-row-reverse'
      ].filter(c => !!c).join(' ')}
      >
        <aside className={'p-4 min-w-[200px] min-h-[calc(100vh-var(--header-height))]'}>
          <div className={'rounded-lg border-dotted border-2 h-full p-2'}>
            aside content
          </div>
        </aside>
        <section className={[
          'transition-all',
          'min-w-[220px] p-4 flex-auto'
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
