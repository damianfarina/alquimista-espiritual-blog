import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Card from '@/components/Card'
import PageTitle from '@/components/PageTitle'

export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('servicios')
  const settings = await getFileBySlug('', ['servicios'])
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination, settings } }
}

export default function Servicios({ posts, initialDisplayPosts, pagination, settings }) {
  const { mdxSource, frontMatter } = settings
  return (
    <>
      <PageSEO title={`Servicios - ${siteMetadata.author}`} description={siteMetadata.description} />
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
            {posts.map((post) => (
              <Card
                key={post.title}
                title={post.title}
                description={post.description}
                imgSrc={post.imgSrc}
                href={`/servicios/${post.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
