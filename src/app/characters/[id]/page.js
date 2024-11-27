"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CharacterDetail({ params }) {
  const router = useRouter();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${params.id}`
        );
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error("Erro ao buscar o personagem:", error);
      }
    };

    fetchCharacter();
  }, [params.id]);

  if (!character) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>
        <strong>Status:</strong> {character.status}
      </p>
      <p>
        <strong>Espécie:</strong> {character.species}
      </p>
      <p>
        <strong>Gênero:</strong> {character.gender}
      </p>
      <p>
        <strong>Origem:</strong> {character.origin.name}
      </p>
      <p>
        <strong>Localização Atual:</strong> {character.location.name}
      </p>
      <button onClick={() => router.push("/characters")}>Voltar</button>
    </div>
  );
}
