import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Card from '@/components/Card'
import PageTitle from '@/components/PageTitle'

export async function getStaticProps() {
  const plans = await getAllFilesFrontMatter('planes')
  const settings = await getFileBySlug('', ['planes'])

  return { props: { plans, settings } }
}

export default function Planes({ plans, settings }) {
  const { mdxSource, frontMatter } = settings
  return (
    <>
      <PageSEO title={`Planes - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ScrollTopAndComment />
      <div className="divide-y">
        <div className="pb-8 space-y-2 md:space-y-5">
          <PageTitle>Planes</PageTitle>
        </div>
        <div className="container pt-8">
          <div className="w-full">
            <MDXLayoutRenderer
              layout={'SimpleLayout'}
              mdxSource={mdxSource}
              frontMatter={frontMatter}
            />
          </div>
          <div className="flex flex-wrap -m-4">
            {plans.map((plan) => (
              <Card
                key={plan.title}
                title={plan.title}
                description={plan.description}
                imgSrc={plan.imgSrc}
                href={`/planes/${plan.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
