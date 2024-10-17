
export function SectionTitle({ title }: { title: string }) {
  return (
    <p className="font-bold text-2xl mb-6 text-[#c5dc6b]">
      {title}
    </p>
  )
}

export function SpecialLink({text, link} : {text: string, link: string}) {
  return (
    <a href={link} target="_blank" className="text-[#8ecd46] hover:underline">{text}</a>
  )
}