import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'PageLayout'

export async function getStaticProps() {
  const settings = await getFileBySlug('acompanamientos', ['default'])
  return { props: { settings } }
}

export default function Acompanamientos({ settings }) {
  const { mdxSource, frontMatter } = settings

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
