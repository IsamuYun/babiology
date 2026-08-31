import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import { Reveal } from "@/src/sections/homepage/Reveal";
import { SiteFooter } from "@/src/sections/homepage/SiteFooter";
import { SiteHeader } from "@/src/sections/homepage/SiteHeader";
import { homeContent, type Locale } from "@/src/sections/homepage/content";
import { contactContent, type ContactField } from "./content";

function Field({ field }: { field: ContactField }) {
  const id = `bb-contact-${field.id}`;
  const className = `bb-field${field.full ? " bb-full" : ""}`;

  return (
    <div className={className}>
      <label htmlFor={id}>
        {field.label}
        {field.required ? <span aria-hidden="true"> *</span> : null}
      </label>

      {field.type === "select" ? (
        <select defaultValue="" id={id} name={field.id} required={field.required}>
          <option disabled value="">
            —
          </option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea
          id={id}
          name={field.id}
          placeholder={field.placeholder}
          required={field.required}
          rows={5}
        />
      ) : (
        <input
          autoComplete={field.autoComplete}
          id={id}
          name={field.id}
          placeholder={field.placeholder}
          required={field.required}
          type={field.type}
        />
      )}
    </div>
  );
}

/**
 * 联系页 —— 沿用 docs/design/band-design.html 的品牌规范 v1.1：
 * 直角容器、2px 圆角按钮、偏紫中性色、系统字体（SF Pro / PingFang SC）。
 * 左栏表单、右栏直接联系方式；中文版多一块微信二维码。
 */
export function ContactPage({ locale }: { locale: Locale }) {
  const chrome = homeContent[locale];
  const content = contactContent[locale];

  return (
    <div className="bb-home" lang={locale === "en" ? "en" : "zh-CN"}>
      <SiteHeader
        altLocaleHref={content.altLocaleHref}
        anchorBase={content.anchorBase}
        content={chrome}
      />

      <main>
        <section className="bb-contact-intro">
          <Reveal className="bb-wrap">
            <p className="bb-eyebrow">{content.eyebrow}</p>
            <h1>
              {content.title[0]}
              <br />
              {content.title[1]}
            </h1>
            <p className="bb-lede">{content.lede}</p>
          </Reveal>
        </section>

        <section className="bb-contact-body">
          <Reveal className="bb-wrap bb-contact-grid">
            <form className="bb-contact-form">
              <h2 className="bb-contact-h">{content.form.label}</h2>

              <div className="bb-form">
                {content.form.fields.map((field) => (
                  <Field field={field} key={field.id} />
                ))}

                <div className="bb-field bb-full">
                  <button className="bb-btn bb-btn-1" type="submit">
                    {content.form.submit}
                  </button>
                </div>
              </div>

              <p className="bb-small bb-contact-note">{content.form.note}</p>
            </form>

            <aside className="bb-contact-aside">
              <div className="bb-contact-panel">
                <h2 className="bb-contact-h">{content.channels.label}</h2>
                <ul className="bb-channels">
                  {content.channels.items.map((item) => (
                    <li key={item.kicker}>
                      <p className="bb-channel-kicker">{item.kicker}</p>
                      {item.href ? (
                        <a className="bb-channel-value" href={item.href}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="bb-channel-value">{item.value}</p>
                      )}
                      <p className="bb-channel-note">{item.note}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {content.wechatQr ? (
                <div className="bb-contact-panel bb-qr">
                  <h2 className="bb-contact-h">{content.wechatQr.label}</h2>
                  <Image
                    alt={content.wechatQr.alt}
                    height={1131}
                    src={withBasePath("/assets/wechat-qrcode.jpg")}
                    width={888}
                  />
                  <p className="bb-channel-note">{content.wechatQr.caption}</p>
                </div>
              ) : null}

              <div className="bb-contact-panel">
                <h2 className="bb-contact-h">{content.promise.label}</h2>
                <ul className="bb-promise">
                  {content.promise.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </section>
      </main>

      <SiteFooter anchorBase={content.anchorBase} content={chrome} />
    </div>
  );
}
