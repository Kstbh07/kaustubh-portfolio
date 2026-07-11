import { type MouseEvent, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MdClose, MdMenu } from "react-icons/md";
import "./styles/Navbar.css";
import { profile } from "../data/portfolio";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother | undefined;

const navItems = [
  { text: "ABOUT", homeHref: "/about", aboutHref: "/about" },
  { text: "PROJECTS", homeHref: "#work", aboutHref: "/#work" },
  { text: "SKILLS", homeHref: "#skills", aboutHref: "/#skills" },
  { text: "EXPERIENCE", homeHref: "#experience", aboutHref: "/#experience" },
  { text: "ACHIEVEMENTS", homeHref: "#achievements", aboutHref: "/#achievements" },
  { text: "CONTACT", homeHref: "#contact", aboutHref: "/#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAboutPage = window.location.pathname.replace(/\/$/, "") === "/about";

  useEffect(() => {
    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");

    if (!wrapper || !content) return;

    const createdSmoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });
    smoother = createdSmoother;

    createdSmoother.scrollTop(0);
    createdSmoother.paused(true);

    const onResize = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      createdSmoother.kill();
      if (smoother === createdSmoother) smoother = undefined;
    };
  }, []);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsMenuOpen(false);

    if (!isAboutPage && href.startsWith("#") && smoother) {
      event.preventDefault();
      smoother.scrollTo(href, true, "top top");
    }
  };

  return (
    <>
      <div className={`header${isMenuOpen ? " nav-menu-open" : ""}`}>
        <a href="/#" className="navbar-title" data-cursor="disable">
          {profile.initials}
        </a>
        <a
          href={profile.linkedin}
          className="navbar-connect"
          data-cursor="disable"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/{profile.handle}
        </a>
        <button
          type="button"
          className="navbar-menu-toggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          data-cursor="disable"
        >
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
        <ul>
          {navItems.map((item) => {
            const href = isAboutPage ? item.aboutHref : item.homeHref;
            return (
              <li key={item.text}>
                <a
                  data-href={item.homeHref}
                  href={href}
                  onClick={(event) => handleNavClick(event, href)}
                >
                  <HoverLinks text={item.text} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
