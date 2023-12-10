import { Header } from './components/Header/header'
import { Experience } from './components/experience/experience'
import { Information } from './components/information/information'
import './styles/home.scss'
import EmailIcons from './components/icons/email-icon'
import SocialBtns from './components/social-btns/socialBtns'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experience/>
      <Information/>
        <div className="buttons">
          <SocialBtns/>
          <a className='btn-primary' href='mailto:fashardmann@gmail.com'>
            CONTACT-ME
            <EmailIcons/>
          </a>
        </div>
    </main>
  )
}
