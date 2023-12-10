import { SectionTitle } from '../sectionTitle/sectionTitle'
import './experience.scss'
import Image from 'next/image'

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>
                three years studying about systems development <br /> 
                and with one year of experience in the area,
                I worked at Infinity School, at Nexxo and Grupo Plantão
            </p>
        <div className="experience-time">
            <div className='experience-language'>
                <Image 
                src="/react.png"
                alt='react logo'
                width={40}
                height={40}
                priority
                />

                <div className="experience-unit">
                    <div className="experience-measure measure-1">
                        <span>1 Year</span>
                    </div>
                </div>
            </div>

            <div className='experience-language'>
                <Image 
                src="/python.png"
                alt='python logo'
                width={40}
                height={40}
                priority
                />
                <div className="experience-unit">
                    <div className="experience-measure measure-2">
                        <span>2 Years</span>
                    </div>
                </div>
            </div>

            <div className='experience-language'>
                <Image 
                src="/java.png"
                alt='java logo'
                width={40}
                height={40}
                priority
                />
                <div className="experience-unit">
                    <div className="experience-measure measure-1">
                        <span>1 Year</span>                        
                    </div>
                </div>
            </div>

            <div className='experience-language'>
                <Image 
                src="/JavaScript-logo.png"
                alt='JavaScript logo'
                width={40}
                height={40}
                priority
                />
                <div className="experience-unit">
                    <div className="experience-measure measure-3">
                        <span>3 Years</span>
                    </div>
                </div>
            </div>

            <div className='experience-language'>
                <Image 
                src="/fastapi.svg"
                alt='fastapi logo'
                width={40}
                height={40}
                priority
                />
                <div className="experience-unit">
                    <div className="experience-measure measure-1">
                        <span>1 Year</span>
                    </div>
                </div>
            </div>

            <div className='experience-language'>
                <Image 
                src="/django.svg"
                alt='django logo'
                width={40}
                height={40}
                priority
                />
                <div className="experience-unit">
                    <div className="experience-measure measure-1">
                        <span>1 Year</span>                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}