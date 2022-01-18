import { PageSEO } from '@/components/SEO'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'

export async function getStaticProps() {
  const settings = await getFileBySlug('home', ['default'])
  return { props: { settings } }
}

export default function Home({ settings }) {
  const { mdxSource, frontMatter } = settings
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <MDXLayoutRenderer layout={'SimpleLayout'} mdxSource={mdxSource} frontMatter={frontMatter} />
    </>
  )
}
