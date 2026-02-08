import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Hero from "./Hero";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-cardenio text-[#213448] font-bold bg-[#EAE0CF]">
      <main className="flex-1">{children}</main>
      <Footer linkedInUrl="https://www.linkedin.com/in/bryanjhdang" />
    </div>
  );
}

function Home() {
  return (
    <Hero
      title="Hey there, I'm Bryan"
      subtitle="Welcome! Come see what I'm up to :D"
    />
  );
}

function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="text-gray-600 mt-2">Posts will go here.</p>
    </div>
  );
}

function BlogPost() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold">Post</h1>
      <p className="text-gray-600 mt-2">Single post view.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
