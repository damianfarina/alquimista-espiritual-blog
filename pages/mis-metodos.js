import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Card from '@/components/Card'
import PageTitle from '@/components/PageTitle'

export async function getStaticProps() {
  const methods = await getAllFilesFrontMatter('mis-metodos')
  const settings = await getFileBySlug('', ['mis-metodos'])

  return { props: { methods, settings } }
}

export default function MisMetodos({ methods, settings }) {
  const { mdxSource, frontMatter } = settings
  return (
    <>
      <PageSEO
        title={`Mis Métodos - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <ScrollTopAndComment />
      <div className="divide-y">
        <div className="pb-8 space-y-2 md:space-y-5">
          <PageTitle>Mis Métodos</PageTitle>
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
            {methods.map((method) => (
              <Card
                key={method.title}
                title={method.title}
                description={method.description}
                imgSrc={method.imgSrc}
                href={`/mis-metodos/${method.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
