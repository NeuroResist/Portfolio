import tw from "twin.macro";
import styled from "@emotion/styled/macro";

export const Resume = styled.a`
  ${tw`flex justify-center h-40 w-100 items-center bg-[#530FAD] flex text-xl transition-all duration-300 cursor-pointer max-lg:hidden max-sm:flex`}

  ${tw`hover:shadow-[0_0_78px_4px_rgb(116,1,239),0_0_12px_6px_rgb(116,1,239),inset_0_0_12px_6px_rgb(116,1,239)] drop-shadow-[0_0_30px_rgb(116,1,239)]`}
  
  ${tw`border-[3px] rounded border-solid border-[#530FAD]`}
`;

const NeonButton = () => (
  <Resume
    target="_blank"
    href="https://voronezh.hh.ru/applicant/resumes/view?resume=96d5392eff0bf80b750039ed1f506b54336565"
  >
    Резюме
  </Resume>
);

export default NeonButton;
