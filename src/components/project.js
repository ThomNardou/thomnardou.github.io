import Image from "next/image"
import { useParams } from "next/navigation"

export default function PortfolioProject({ title, params, githubLink, description, languageName, languageColor }) {
  console.log(languageColor)
  return (
    <>
      <h2>{title}</h2>
      <div className="presentation">
        <Image src={params} width={500} height={300}></Image>
        <div className="text">
          <h3>Description :</h3>
          <p className="descriptionProject">{description}</p>
          <div className="name">
            <div style={{backgroundColor: languageColor}}></div>
            <label>{languageName}</label>
          </div>
          <a href={githubLink} className="linkGitHub">Lien GitHub</a>
        </div>
      </div>
    </>
  )
}  