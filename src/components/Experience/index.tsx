import { WORKS } from "./constants";

function Experience() {
  return (
    <div
      id="workExperience"
      className="text-white max-w-[800px] mx-auto mb-100 flex flex-col"
    >
      <h2 className="self-center text-3xl mb-32 justify-center underline underline-offset-4 decoration-sky-500">
        Опыт работы
      </h2>

      <ul>
        {WORKS.map(
          ({
            descriptions,
            position,
            site,
            city,
            companyName,
            isEnd,
            to,
            from,
            period,
          }) => (
            <li key={`company_${companyName}`}>
              <p className="text-2xl font-bold">Продолжительность - {period}</p>

              <hr className="mb-6" />

              <div className="flex">
                <p className="min-w-[150px]">
                  <time dateTime={from.startDate}>{from.startTime}</time>—
                  {isEnd ? (
                    <time dateTime={to?.startDate}>{to?.endTime}</time>
                  ) : (
                    "настоящее время"
                  )}
                </p>

                <div>
                  <section>
                    <h3 className="text-xl font-bold text-[#6186ca]">
                      {companyName}
                    </h3>
                    <p className="mb-8 text-[#6186ca]">
                      {city},
                      <a target="_blank" href={site}>
                        {site}
                      </a>
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-6 text-xl font-bold text-[#c5a77c]">
                      {position}
                    </h3>

                    {descriptions.map((paragraph: string) => (
                      <p
                        key={`paragraph_${paragraph}`}
                        className="mb-10 last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Experience;
