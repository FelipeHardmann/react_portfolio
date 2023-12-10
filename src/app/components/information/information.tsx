import { SectionTitle } from '../sectionTitle/sectionTitle'
import './information.scss'

export function Information(){
    return(
        <div className="infos">
            <SectionTitle text="Lenguages"/>
            <div className="languages-info">
                <span>🇧🇷 PT-BR - Native</span>
                <span>🇺🇸 EN - Intermediary</span>
            </div>
            <SectionTitle text="Education"/>
            <div className="educational-info">
                <span>📚</span>
                <span>Technologist analysis and systems development - Universidade Católica de Salvador</span>
                <span>🎓</span>
                <span>Systems Development Technician</span>
            </div>
        </div>
    )
}