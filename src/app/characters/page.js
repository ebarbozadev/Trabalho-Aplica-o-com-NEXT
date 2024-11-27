"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCharacters(page, search);
  }, [page, search]);

  const fetchCharacters = async (page, search = "") => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`
      );
      const data = await res.json();
      setCharacters(data.results || []);
      setInfo(data.info || {});
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div>
      <h1>Personagens</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar por nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link href={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>

      <div>
        {info.prev && (
          <button onClick={() => setPage(page - 1)}>Anterior</button>
        )}
        {info.next && (
          <button onClick={() => setPage(page + 1)}>Próximo</button>
        )}
      </div>
    </div>
  );
}
