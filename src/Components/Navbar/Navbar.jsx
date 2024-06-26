import './Navbar.css';
import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Services = [
  {
    name: 'User Registration and Login',
    description:
      'Implement user registration and login functionalities to allow users to create accounts and securely access the Smart Waste Management System',
    href: '#',
  },
  {
    name: 'Waste Collection Schedule',
    description:
      'Allow household users to schedule waste collection and receive notifications.',
    href: '#',
  },
  {
    name: 'Recycling Tracker',
    description:
      'Implement a feature for users to track their recycling efforts and view their environmental impact.',
    href: '#',
  },
  {
    name: 'Waste Collection Services Management',
    description:
      'Enable waste collection services to manage routes, schedules, and track performance.',
    href: '#',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className="bg-white ">
      <nav
        className={`mx-auto flex items-center p-6 lg:px-20 fixed w-full text-white z-50 ${
          scrolled ? 'bg-black' : 'bg-transparent'
        }`}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-mt-5 p-1.5 ">
            <span className="sr-only"></span>
            <p className="text-2xl font-bold">
              Smart <span className="font-light ">Bin</span>{' '}
              <span className="text-[#37af65] text-5xl -ml-1 ">.</span>{' '}
            </p>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 text-white absolute right-5"
              aria-hidden="true"
            />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-20 ">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-50">
            Home
          </a>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-50">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-50"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {Services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"></div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-50">
            About
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-50">
            Pricing
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-50">
            Contact
          </a>
          <div className='flex items-center justify-between gap-10 -mt-2'>
            <a
              href="/Signup"
              className="rounded-md bg-[#37af65] px-2 py-2 sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold text-white shadow-sm hover:bg-[#468d5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37af65]"
            >
              Get started
            </a>
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-50"
            >
              Login
            </a>
          </div>
        </Popover.Group>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-mt-5 p-1.5 ">
              <span className="sr-only">Your Company</span>
              <p className="text-2xl font-bold">
                Smart <span className="font-normal ">Bin</span>{' '}
                <span className="text-[#37af65] text-5xl -ml-1 ">.</span>{' '}
              </p>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                <Disclosure as="div" className="-mx-3 ">
                  {({ open }) => (
                    <>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-6 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                      >
                        Home
                      </a>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {Services.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Contact
                </a>
                <a
                  href="Signup"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Get Started
                </a>
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
