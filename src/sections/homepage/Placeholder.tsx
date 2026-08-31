/**
 * 图片占位符 —— 标注该拍什么、什么比例，可直接交给摄影师。
 * 换成真实照片时整个 <Placeholder> 替换为 <Image>。
 */
export function Placeholder({
  label,
  ratio,
  className = ""
}: {
  label: string;
  ratio: string;
  className?: string;
}) {
  return (
    <figure
      className={`bb-ph ${className}`.trim()}
      style={{ ["--ar" as string]: ratio.replace(":", " / ") }}
    >
      <figcaption>
        {label}
        <br />
        {ratio}
      </figcaption>
    </figure>
  );
}
