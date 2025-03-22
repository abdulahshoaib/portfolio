"use client";
import dynamic from "next/dynamic";

const WebTerm = dynamic(() => import("@/components/Terminal"), {
  ssr: false
});

export default function TerminalWrapper() {
  return <WebTerm />;
}
