import { Align, UiContext } from '@/context/UiProvider'
import { Menu, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { Fragment, MouseEventHandler, useContext } from 'react'

export default function ConfigUi() {
  const { aside, container, changeAside, changeContainer } = useContext(UiContext)

  const group:{
    title: 'container' | 'aside'
    value: Align | Omit<Align, 'center' | 'full'>
    icon?: string
    click?: MouseEventHandler<HTMLButtonElement>
  }[][] = [
    [{
      title: 'container',
      value: 'container'
    }, {
      title: 'container',
      value: 'left',
      icon: 'mdi:align-horizontal-left',
      click: (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        changeContainer({
          align: 'left'
        })
      }
    }, {
      title: 'container',
      value: 'right',
      icon: 'mdi:align-horizontal-right',
      click: (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        changeContainer({
          align: 'right'
        })
      }
    }, {
      title: 'container',
      value: 'center',
      icon: 'mdi:format-align-center',
      click: (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        changeContainer({
          align: 'center'
        })
      }
    }, {
      title: 'container',
      value: 'full',
      icon: 'mdi:format-align-justify',
      click: (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        changeContainer({
          align: 'full'
        })
      }
    }], 
    [{
      title: 'aside',
      value: 'aside'
    }, {
      title: 'aside',
      value: 'left',
      icon: 'mdi:dock-left',
      click: (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        changeAside({
          align: 'left'
        })
      }
    }, {
      title: 'aside',
      value: 'right',
      icon: 'mdi:dock-right',
      click: (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        changeAside({
          align: 'right'
        })
      }
    }]
  ]

  return (
    <>
      <Menu as="div" className="hidden lg:inline-block relative text-left select-none">
        <Menu.Button className='flex items-center'>
          <Icon icon={'mdi-code-block-brackets'} className='text-2xl' />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 origin-top-right rounded-md shadow lg:divide-y dark:shadow-neutral-700 ring-1 ring-black ring-opacity-5 focus:outline-none bg-neutral-100/80 dark:bg-neutral-800/80 backdrop-blur p-1">
            {group.map((menus, gIndex) => (
              <div key={gIndex} className="p-1 flex flex-col gap-1">
                {menus.map((menu, mIndex) => (
                  <Menu.Item key={mIndex} as={'div'} className={[menu.title === 'container' && 'hidden lg:block'].filter(c => !!c).join(' ')}>
                    <button
                      className={[
                        'group flex items-center text-sm w-full rounded-md gap-2',
                        menu.icon && 'px-2 py-1',
                        menu.click && 'hover:bg-slate-200/50',
                        menu.title === 'container' && container.align === menu.value && 'bg-slate-200 dark:text-black',
                        menu.title === 'aside' && aside.align === menu.value && 'bg-slate-200 dark:text-black'
                      ].filter(c => !!c).join(' ')}
                      onClick={menu.click}
                    >
                      {menu.icon && <Icon icon={menu.icon} />}
                      <span className='pl-2'>{menu.value.replace(/^(.)/, (s) => (s.toUpperCase()))}</span>
                    </button>
                  </Menu.Item>
                ))}
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}
