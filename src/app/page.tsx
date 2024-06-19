import ArtGrid from "@/components/ArtGrid";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ArtGrid />
      <Link href={"/pride"}>Ir para próxima página</Link>
    </>
  );
}
