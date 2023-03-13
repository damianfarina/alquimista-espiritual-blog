import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Card from '@/components/Card'
import PageTitle from '@/components/PageTitle'

export async function getStaticProps() {
  const services = await getAllFilesFrontMatter('servicios')
  const settings = await getFileBySlug('', ['servicios'])

  return { props: { services, settings } }
}

export default function Servicios({ services, settings }) {
  const { mdxSource, frontMatter } = settings
  return (
    <>
      <PageSEO
        title={`Servicios - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <ScrollTopAndComment />
      <div className="divide-y">
        <div className="pb-8 space-y-2 md:space-y-5">
          <PageTitle>Servicios</PageTitle>
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
            {services.map((service) => (
              <Card
                key={service.title}
                title={service.title}
                description={service.description}
                imgSrc={service.imgSrc}
                href={`/servicios/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
