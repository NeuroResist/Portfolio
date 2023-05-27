import me from "assets/icons/myPhoto.jpg";

function MyInfo() {
  return (
    <>
      <img
        src={me}
        alt="мое фото"
        className="w-[290px] h-[250px] mb-40 hidden max-sm:flex rounded-xl"
      />
      <section className="mb-32 max-sm:flex max-sm:flex-col max-sm:items-center">
        <h3 className="font-bold text-2xl">Привет, меня зовут Ярослав Орлов</h3>

        <p className="text-[#c5a77c] text-xl mb-8">Frontend developer</p>
        <p className="text-lg max-sm:text-center">
          Люблю свое дело, спокойный и искренний, быстро привыкаю к новым
          условиям.
        </p>
      </section>
    </>
  );
}

export default MyInfo;
