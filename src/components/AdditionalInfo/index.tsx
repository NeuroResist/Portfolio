import { INFO } from "./constants";

function AdditionalInfo() {
  return (
    <article id="additionalInformation" className="flex flex-col mb-100">
      <h2 className="self-center text-3xl mb-48 justify-center underline underline-offset-4 decoration-sky-500">
        Дополнительная информация
      </h2>

      <div className="flex justify-center max-md:flex-col max-md:items-center">
        {Object.entries(INFO).map(([key, value]) => (
          <section
            key={`additional_${key}`}
            className="border-r-2 max-md:border-r-0 max-md:border-b-2 max-md:border-b-white max-w-[300px] border-r-white last:border-none max-md:py-20 px-20 flex flex-col justify-center items-center"
          >
            <div className="mb-10">{value.img}</div>
            <h3 className="text-2xl mb-10">{key}</h3>
            {value.text.map((paragraph) => (
              <p key={`paragraph_${paragraph}`}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}

export default AdditionalInfo;
