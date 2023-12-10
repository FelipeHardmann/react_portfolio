import Image from 'next/image'

import './header.scss'

export function Header(){
    return(
        <div className="header">
            <div>
                <h1>Hi, i´m Felipe Hardmann ✌🏾🤙🏾</h1>
                <h2>Software Developer</h2>
            </div>
            <Image 
            src="/logoFelipe.png"
            alt='Felipe Foto'
            width={330}
            height={300}
            priority
            />
        </div>
    )
}
