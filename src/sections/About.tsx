import { SectionTitle } from "./SectionComponents";
import ProfileImg from "../assets/images/profile.jpg";

export default function About() {
  return (
    <div id="about" className="pt-20 pb-20 border-none">
      <div className="flex flex-col lg:flex-row">
        <div className="sm:mr-20 text-base space-y-4">
          <SectionTitle title="About Me" />
          <p>
            I'm currently doing a Computer Science degree at SFU!
          
          
            Sometimes <a className="link" href="https://bryandang.substack.com/" target="_blank">I like to blog about stuff</a>, usually game reviews and random media.
          </p>
          <p>
            I like playing tabletop and video games, reading, and binge watching camping videos on YouTube. My favorite game is Baldur's Gate 3, and my favorite manga is Haikyuu.
          </p>
          <p>
            If you want to get in touch, here are some links!
          </p>
          <ul className="list-disc list-inside">
            <li><a className="link" href="https://www.linkedin.com/in/bryanjhdang/" target="_blank">LinkedIn</a></li>
            <li><a className="link" href="mailto:bda37@sfu.ca">Email</a></li>  
          </ul>
        </div>
        <img src={ProfileImg} alt="Bryan Profile Picture" className="w-64 h-72 object-cover pt-10 sm:pt-20 lg:pt-0" />
      </div>
    </div>
  )
}