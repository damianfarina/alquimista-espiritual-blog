export default function SimpleLayout({ children }) {
  return (
    <div
      className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
      style={{ gridTemplateRows: 'auto 1fr' }}
    >
      <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
        <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
      </div>
    </div>
  )
}
