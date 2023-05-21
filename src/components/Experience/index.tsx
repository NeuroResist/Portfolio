import { WORKS } from "./constants";
import { IExperience } from "./interface";

function Experience() {
  return (
    <div className="text-white w-[800px] mx-auto">
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
          <article>
            <h2 className="text-2xl font-bold">Опыт работы - {period}</h2>

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
                    {city},<a href={site}>{site}</a>
                  </p>
                </section>

                <section>
                  <h3 className="mb-6 text-xl font-bold text-[#c5a77c]">
                    {position}
                  </h3>

                  {descriptions.map((paragraph: string) => (
                    <p className="mb-10 last:mb-0">{paragraph}</p>
                  ))}
                </section>
              </div>
            </div>
          </article>
        )
      )}
    </div>
  );
}

export default Experience;
