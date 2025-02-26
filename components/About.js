import Wysiwyg from "./Wysiwyg"

export default function About({ about }) {
  return (
    <section className="mx-auto w-full max-w-maximus px-3 py-8 text-zinc-50 md:p-8">
      <div className="flex w-full flex-col rounded-lg bg-neutral-800 p-5 text-white">
        <h2 className="font-heading text-3xl font-bold">About</h2>
        <Wysiwyg html={about} />
      </div>
    </section>
  )
}
