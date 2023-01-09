export default function Wysiwyg({ html }) {
  return (
    <div
      className="text-lg [&>p]:mt-3  [&>*>em]:italic [&>*>strong]:font-bold [&>ul>li]:relative [&>ul>li]:pl-3 [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:font-bold [&>ul>li]:before:text-primary [&>ul>li]:before:content-['•'] [&>*>a]:font-bold [&>*>a]:text-primary"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
