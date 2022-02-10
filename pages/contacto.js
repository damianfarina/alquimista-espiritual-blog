import React from 'react'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { useForm } from '@formcarry/react'
import PageTitle from '@/components/PageTitle'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export async function getStaticProps() {
  const settings = await getFileBySlug('contacto', ['default'])
  return { props: { settings } }
}

export default function Contact({ settings }) {
  const { state, submit } = useForm({
    id: process.env.NEXT_PUBLIC_FORM_CARRY_ID,
  })
  const { mdxSource, frontMatter } = settings

  // Success message
  if (state.submitted) {
    return <div>Tu mensaje fue enviado. ¡Gracias!</div>
  }

  return (
    <>
      <PageSEO
        title={['Contacto', siteMetadata.author].join(' - ')}
        description={siteMetadata.description}
      />
      <ScrollTopAndComment />
      <div className="divide-y">
        <div className="pb-8 space-y-2 md:space-y-5">
          <PageTitle>Contacto</PageTitle>
        </div>
        <form className="flex flex-col pt-8" onSubmit={submit}>
          <MDXLayoutRenderer
            layout={'SimpleLayout'}
            mdxSource={mdxSource}
            frontMatter={frontMatter}
          />
          <div className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="dark:text-gray-100 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  Nombre
                </label>
                <input
                  className="px-4 rounded-md dark:bg-gray-700 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600 block w-full"
                  id="first-name"
                  name="first-name"
                  type="text"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="dark:text-gray-100 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="last-name"
                >
                  Apellido
                </label>
                <input
                  className="px-4 rounded-md dark:bg-gray-700 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600 block w-full"
                  id="last-name"
                  name="last-name"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="dark:text-gray-100 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Correo electrónico
                </label>
                <input
                  className="px-4 rounded-md dark:bg-gray-700 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600 block w-full"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="dark:text-gray-100 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="phone"
                >
                  Teléfono
                </label>
                <input
                  className="px-4 rounded-md dark:bg-gray-700 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600 block w-full"
                  id="phone"
                  name="phone"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="dark:text-gray-100 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Consulta
                </label>
                <textarea
                  className="py-3 leading-tight h-48 resize-y px-4 rounded-md dark:bg-gray-700 focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600 block w-full"
                  id="message"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <button
                className="font-bold shadow py-2 w-full bg-primary-500 px-4 rounded-md font-medium text-white hover:bg-primary-700 dark:hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
