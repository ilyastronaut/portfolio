import Image from "next/image";

export default function ProfileSection() {
  return (
    <div className="flex flex-col gap-2">
      <Image
        width="48"
        height="48"
        className="border rounded-full"
        src="/pfp.jpeg"
        alt=""
      />
      <div className="flex flex-col font-medium">
        <h1>Ilyas Ayachi</h1>
        <p className="text-muted-foreground">Software Developer</p>
      </div>
    </div>
  );
}
