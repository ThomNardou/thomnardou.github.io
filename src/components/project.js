import Image from "next/image"
import { useParams } from "next/navigation"

export default function PortfolioProject({ title, params, githubLink, description, languageName, languageColor, api }) {
  console.log(languageColor)
  return (
    <>
      <div className="projectCard">
        <div className="presentation">
          <Image src={params} width={500} height={300} id="image"></Image>
          <div className="text">
            <h3>{title}</h3>
            <div className="other">
              <h4>Description :</h4>
              <p className="descriptionProject">{description}</p>
              <h4>API :</h4>
              <p className="descriptionProject">{api}</p>
              <h4>Language :</h4>
              <div className="name">
                <div style={{ backgroundColor: languageColor }}></div>
                <label>{languageName}</label>
              </div>
            </div>
            <a href={githubLink} className="linkGitHub">Lien GitHub</a>
          </div>
        </div>
      </div>
    </>
  )
}  