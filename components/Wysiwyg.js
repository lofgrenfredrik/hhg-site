export default function Wysiwyg({ html }) {
  return (
    <div
      className="text-lg [&_p]:mt-3 [&_em]:italic [&_strong]:font-bold [&_ul_li]:relative [&_ul_li]:pl-3 [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:font-bold [&_ul_li]:before:text-primary [&_ul_li]:before:content-['•'] [&_a]:font-bold [&_a]:text-primary"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
