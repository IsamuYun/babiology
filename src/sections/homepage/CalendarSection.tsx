import type { HomeContent } from "./content";
import { Reveal } from "./Reveal";

export function CalendarSection({
  content
}: {
  content: HomeContent["calendar"];
}) {
  return (
    <section>
      <Reveal className="bb-wrap bb-form-band">
        <div className="bb-stack">
          <div>
            <p className="bb-eyebrow">{content.eyebrow}</p>
            <h2>{content.title}</h2>
          </div>
          <p>{content.body}</p>
          <p className="bb-small">{content.privacy}</p>
        </div>

        <form action="/contact" className="bb-form">
          <div className="bb-field">
            <label htmlFor="bb-family-name">{content.familyName.label}</label>
            <input
              autoComplete="family-name"
              id="bb-family-name"
              name="familyName"
              placeholder={content.familyName.placeholder}
              type="text"
            />
          </div>
          <div className="bb-field">
            <label htmlFor="bb-given-name">{content.givenName.label}</label>
            <input
              autoComplete="given-name"
              id="bb-given-name"
              name="givenName"
              placeholder={content.givenName.placeholder}
              type="text"
            />
          </div>
          <div className="bb-field bb-full">
            <label htmlFor="bb-email">{content.email.label}</label>
            <input
              autoComplete="email"
              id="bb-email"
              name="email"
              placeholder={content.email.placeholder}
              type="email"
            />
          </div>
          <div className="bb-field bb-full">
            <button
              className="bb-btn bb-btn-1"
              style={{ width: "100%", justifyContent: "center" }}
              type="submit"
            >
              {content.submit}
            </button>
          </div>
        </form>
      </Reveal>
    </section>
  );
}
