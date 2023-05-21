import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

function Header() {
  return (
    <header className="flex justify-between container mx-auto h-80 items-center mb-52">
      <FavoriteIcon
        sx={{ fontSize: "60px" }}
        className="text-red-800 animate-wiggle"
      />

      <nav>
        <ul className="flex justify-center flex-row [&>*]:px-20 text-lg text-white">
          <li>
            <a href="#">Обо мне</a>
          </li>
          <li>
            <a href="#">Стек</a>
          </li>
          <li>
            <a href="#">Заслуги</a>
          </li>
          <li>
            <a href="#">Сертификаты</a>
          </li>
        </ul>
      </nav>

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
