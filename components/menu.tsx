'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Container from './container'
import { useState, useEffect } from 'react';
import cn from 'classnames'

type Props = {
  itemsMenu: { name: string, href: string, current: boolean }[],
}

export default function Menu({ itemsMenu }: Props) {
  const [navbarShrinked, setnavbarShrinked] = useState(false);

  // TODO: add navbar shrink 
   var navbarShrink = function () {
    if (window.scrollY === 0) {
      setnavbarShrinked(false);
    } else {
      setnavbarShrinked(true);
    }
  };

  useEffect(() => {
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);
    return () => {
      document.removeEventListener('scroll', navbarShrink);
    };
  }, []);

  return (
    <Disclosure as="nav" className={cn({'sm:bg-main-menu-gray/50': !navbarShrinked}, 'bg-main-menu-gray z-10 font-amaticsc fixed top-0 left-0 right-0')}>
      {({ open }) => (
        <Container>
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-purple-mountains-majesty-600 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center text-purple-mountains-majesty-600">
                  <a
                    href='/'
                    className={'text-purple-mountains-majesty-600 text-2xl font-bold'}
                  >
                    Kamil Kocot Fotografia
                  </a>

                </div>
                <div className="hidden sm:ml-0 sm:block grow">
                  <div className="flex justify-end">
                    {itemsMenu.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cn({
                          'bg-gray-900 text-white': item.current, 
                          'text-purple-mountains-majesty-600 active:bg-transparent hover:bg-black hover:text-white': !item.current},
                          'rounded-md px-3 py-2 text-2xl font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition className={'overflow-hidden bg-main-menu-gray'}
            //show={true}
            enter="transition-height duration-300 ease"
            enterFrom="transform max-h-0"
            enterTo="transform max-h-[300px]"
            leave="transition-height duration-300 ease"
            leaveFrom="transform max-h-[300px]"
            leaveTo="transform max-h-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {itemsMenu.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={cn({
                      'bg-black text-white': item.current, 
                      'text-purple-mountains-majesty-600 active:bg-transparent visited:bg-yellow-500 hover:bg-black hover:text-white avtive:bg-black-700': !item.current},
                      'block rounded-md px-3 py-2 font-medium text-base'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </Container>
      )}
    </Disclosure>
  )
}
