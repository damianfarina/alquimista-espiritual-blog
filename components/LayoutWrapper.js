import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between pt-2">
          <div>
            <Link href="/" aria-label="Home">
              <div className="flex items-center justify-between">
                <div className="sm:absolute md:static md:block w-20">
                  <div className="dark:hidden">
                    <Image
                      src="/static/images/logo-light.png"
                      alt={siteMetadata.title}
                      width={1000}
                      height={1556}
                      layout="responsive"
                    />
                  </div>
                  <div className="hidden dark:block">
                    <Image
                      src="/static/images/logo-dark.png"
                      alt={siteMetadata.title}
                      width={1000}
                      height={1556}
                      layout="responsive"
                    />
                  </div>
                </div>
                <div className="mt-1 dark:hidden">
                  <Image
                    src="/static/images/victoria-title.svg"
                    alt={siteMetadata.title}
                    width={200}
                    height={50}
                  />
                </div>
                <div className="mt-1 hidden dark:block">
                  <Image
                    src="/static/images/victoria-title-dark.svg"
                    alt={siteMetadata.title}
                    width={200}
                    height={50}
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5 mt-7">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:pl-2 md:pl-4 lg:pl-8 dark:text-gray-100 whitespace-nowrap"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
