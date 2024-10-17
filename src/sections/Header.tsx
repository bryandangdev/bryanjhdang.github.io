import { Link } from 'react-scroll';

export default function Header() {
  return (
    <div className="hidden sm:block pt-14 pb-10 flow-root">
      <div className="float-left">
        <Link to="main" smooth={true} duration={500} className="text-xl font-semibold mr-6 cursor-pointer link">Home</Link>
        <Link to="about" smooth={true} duration={500} className="text-xl font-semibold mr-6 link">About</Link>
        <Link to="projects" smooth={true} duration={500} className="text-xl font-semibold mr-6 cursor-pointer link">Projects</Link>
        <a href="https://bryandang.substack.com/" target="_blank" className="text-xl font-semibold mr-6 cursor-pointer link">Blog</a>
      </div>
    </div>
  )
}