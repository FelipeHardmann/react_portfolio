import './section-title.scss'

interface SectionTitleProps{
    text: String
}

export function SectionTitle({ text } : SectionTitleProps){
    return(
        <h3 className="section-title">{text}</h3>
    )
}
