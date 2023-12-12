import { FaHtml5, FaPhp, FaUnity } from "react-icons/fa";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp, SiPowershell, SiVisualstudiocode, SiVisualstudio, SiGodotengine } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const ICON_SIZE = 80;

export default function Home() {
  return (
    <>
      <div className="aboutMe">
        <div className="description">
          <h2>About Me :</h2>
          <p>
            My name is Thomas Nardou, and I am currently an apprentice developer in Switzerland.
            My passion for the world of computing is reflected in my constant commitment to explore the many facets of programming.
            As a fervent advocate of digital creativity, I also thrive in the field of graphic design, transforming ideas into captivating visuals.
            I am also an avid fan of the video game minecraft.
          </p>
        </div>
        <div className="pfp"></div>
      </div>

      <div className="language">
        <table>
          <thead>
            <tr>
              <th>Language</th>
              <th>Front-End</th>
              <th>Back-End</th>
              <th>Tools</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            <tr>
              <th>
                <IoLogoJavascript size={ICON_SIZE} className="icon" />
                <SiCsharp size={ICON_SIZE} className="icon" />
                <SiPowershell size={ICON_SIZE} className="icon" />
              </th>
              <th>
                <FaHtml5 size={ICON_SIZE} className="icon" />
                <IoLogoCss3 size={ICON_SIZE} className="icon" />
              </th>
              <th>
                <IoLogoNodejs size={ICON_SIZE} className="icon" />
                <FaPhp size={ICON_SIZE} className="icon" />
                <GrMysql size={ICON_SIZE} className="icon" />
              </th>
              <th>
                <SiVisualstudiocode size={ICON_SIZE} className="icon" />
                <SiVisualstudio size={ICON_SIZE} className="icon" />
                <SiGodotengine size={ICON_SIZE} className="icon" />
                <FaUnity size={ICON_SIZE} className="icon" />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
