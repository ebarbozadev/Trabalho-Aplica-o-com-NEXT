import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo à Enciclopédia Rick and Morty</h1>
      <p>Explore personagens da série!</p>
      <Link href="/characters">Ver Personagens</Link>
    </div>
  );
}
