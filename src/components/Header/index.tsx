import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="flex max-lg:justify-center justify-between mx-auto h-80 items-center mb-100 max-lg:mb-40">
      <FavoriteIcon className="text-red-800 !text-6xl animate-wiggle max-lg:!hidden mr-10" />

      <Navigation />

      <Button
        variant="contained"
        sx={{ marginRight: "10px", bgcolor: "#530FAD" }}
        className="max-lg:!hidden"
      >
        Резюме
      </Button>
    </header>
  );
}

export default Header;
