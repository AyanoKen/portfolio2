export default function SectionShell({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`relative w-full px-6 py-24 sm:px-10 lg:px-16 xl:px-20 ${className}`}
      data-section={id}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}
