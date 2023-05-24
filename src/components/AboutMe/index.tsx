import clsx from "clsx";

import AboutMeInLines from "./AboutMeInLines";
import Contacts from "./Contacts";
import MyInfo from "./MyInfo";

function AboutMe() {
  const largeDevice =
    "max-lg:pb-48 max-lg:items-start max-lg:flex-row max-lg:flex-col-reverse max-lg:items-center";

  return (
    <div
      id="aboutMe"
      className={clsx("flex justify-center relative pb-[150px]", largeDevice)}
    >
      <AboutMeInLines />

      <div className="flex flex-col p-32 max-w-[500px] max-lg:mb-40 max-sm:pb-0 max-sm:items-center">
        <MyInfo />

        <Contacts />
      </div>
    </div>
  );
}

export default AboutMe;
