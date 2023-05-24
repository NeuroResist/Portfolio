import FavoriteIcon from "@mui/icons-material/Favorite";

import Navigation from "./Navigation";
import NeonButton from "./NeonButton";

function Header() {
  return (
    <header className="flex max-lg:justify-center justify-between mx-auto h-80 items-center mb-100 max-lg:mb-40 max-sm:mb-10">
      <FavoriteIcon className="text-[#530FAD] !text-6xl animate-wiggle max-lg:!hidden mr-10" />

      <Navigation />

      <NeonButton />
    </header>
  );
}

export default Header;
