import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="flex justify-between container mx-auto h-80 items-center mb-100">
      <FavoriteIcon
        sx={{ fontSize: "60px" }}
        className="text-red-800 animate-wiggle"
      />

      <Navigation />

      <Button
        variant="contained"
        sx={{ marginRight: "10px", bgcolor: "#530FAD" }}
      >
        Резюме
      </Button>
    </header>
  );
}

export default Header;
