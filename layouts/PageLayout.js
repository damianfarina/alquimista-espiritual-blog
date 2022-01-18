import siteMetadata from '@/data/siteMetadata'
import PageTitle from '@/components/PageTitle'
import { PageSEO } from '@/components/SEO'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export default function PageLayout({ frontMatter, children }) {
  const { title, pageTitle, pageDescription } = frontMatter

  return (
    <>
      <PageSEO
        title={[pageTitle, siteMetadata.author].join(' - ')}
        description={pageDescription || siteMetadata.description}
      />
      <ScrollTopAndComment />
      <article>
        <div className="divide-y">
          <div className="pb-8 space-y-2 md:space-y-5">
            <PageTitle>{title}</PageTitle>
          </div>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
