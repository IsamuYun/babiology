import type { ReactNode } from "react";
import { LegacyInteractions } from "@/components/legacy-interactions";

export function LegacyPage({
  content,
  style,
  children
}: {
  content: string;
  style: string;
  children?: ReactNode;
}) {
  return (
    <>
      {style ? <style dangerouslySetInnerHTML={{ __html: style }} /> : null}
      {children ? (
        <main>
          {children}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </main>
      ) : (
        <main dangerouslySetInnerHTML={{ __html: content }} />
      )}
      <LegacyInteractions />
    </>
  );
}
