import Image from "next/image"
import { useParams } from "next/navigation"

export default function PortfolioProject({ title, params, githubLink, description, languageName, languageColor }) {
  return (
    <>
      <div className="projectCard">
        <div className="presentation">
          <Image src={params} width={500} height={300} id="image"></Image>
          <div className="text">
            <h3>{title}</h3>

            <details>
              <summary>Description</summary>
              <p>{description}</p>
              <div className="name">
                <div style={{ backgroundColor: languageColor }}></div>
                <label>{languageName}</label>
              </div>
            </details>

            <a href={githubLink} className="linkGitHub">GitHub Link</a>
          </div>
        </div>
      </div>
    </>
  )
}  