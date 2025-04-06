"use client";
import scss from "./MainWelcome.module.scss";
import arcelik from "@/component/assets/images/logo/company-arcelik.png";
import midea from "@/component/assets/images/logo/company-midea.png";
import pas from "@/component/assets/images/logo/company-pas.png";
import bauer from "@/component/assets/images/logo/company-bauer.avif";
import coko from "@/component/assets/images/logo/company-coko.svg";
import bsh from "@/component/assets/images/logo/company-bsh.svg";
import bosch from "@/component/assets/images/logo/company-bosch.png";
import vaillant from "@/component/assets/images/logo/company-vaillant.png";
import threeM from "@/component/assets/images/logo/company-3M.png";
import akplas from "@/component/assets/images/logo/company-akplas.png";
import frimpeks from "@/component/assets/images/logo/company-frimpeks.png";
import schott from "@/component/assets/images/logo/company-schott.svg";
import spolgas from "@/component/assets/images/logo/company-spolgas.png";
import ytong from "@/component/assets/images/logo/ytong.png";
import jefleks from "@/component/assets/images/logo/jefleks.png";
import deva from "@/component/assets/images/logo/deva.jpg";
import setas from "@/component/assets/images/logo/setas.webp";
import penti from "@/component/assets/images/logo/penti.png";
import sanifoam from "@/component/assets/images/logo/sanifoam.png";
import korozo from "@/component/assets/images/logo/korozo.png";
import posetsan from "@/component/assets/images/logo/posetsan.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/navigation";

const MainWelcome = () => {
  const router = useRouter();
  const logos = [
    arcelik,
    midea,
    pas,
    bauer,
    coko,
    bsh,
    bosch,
    vaillant,
    threeM,
    akplas,
    frimpeks,
    schott,
    spolgas,
    ytong,
    jefleks,
    deva,
    setas,
    penti,
    sanifoam,
    korozo,
    posetsan,
  ];

  return (
    <>
      <section className={scss.MainWelcome}>
        <div className={scss.mainInfo}>
          <div className="container">
            <div className={scss.content}>
              <h1>Innovative Conveyor Solutions for Every Industry</h1>
              <h6>
                Tork A.Ş . provides cutting-edge conveyor systems tailored to
                the specific needs of various industries.
              </h6>
            </div>
          </div>
        </div>
      </section>
      <div className={scss.scrollLogo}>
        <Marquee speed={50} gradient={false}>
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Company logo"
              className={scss.logo}
            />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default MainWelcome;
