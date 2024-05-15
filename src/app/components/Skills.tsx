import { DATA } from "../utils/data"

const Skills = () => {
  return (
    <div className="content-card">
      <h1 className="header-one">Skills</h1>
      <ol>
        {DATA.Skills.map((item) => (
          <li className="list-decimal p-2">{item}</li>
        ))}
      </ol>
    </div>
  )
}

export default Skills
