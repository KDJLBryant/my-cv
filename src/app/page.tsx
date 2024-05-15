'use client'
import Content from "./components/Content"
import AboutMe from "./components/AboutMe"
import CvHeader from "./components/CvHeader"
import Skills from "./components/Skills"
import Education from "./components/Education"

export default function Home() {
  return (
    <div>
      <CvHeader />
      <Content>
        <AboutMe />
        <Skills />
        <Education />
      </Content>
    </div>
  )
}
