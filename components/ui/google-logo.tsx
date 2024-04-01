import Image from "next/image";

export default function GoogleLogo() {
  return (
    <div>
      <Image
        src="/google.svg"
        alt="Google Logo"
        width={22}
        height={22}
        className="mr-2 h-4 w-4"
      />
    </div>
  );
}
