import { LegacyInteractions } from "@/components/legacy-interactions";

export function LegacyPage({
  content,
  style
}: {
  content: string;
  style: string;
}) {
  return (
    <>
      {style ? <style dangerouslySetInnerHTML={{ __html: style }} /> : null}
      <main dangerouslySetInnerHTML={{ __html: content }} />
      <LegacyInteractions />
    </>
  );
}
