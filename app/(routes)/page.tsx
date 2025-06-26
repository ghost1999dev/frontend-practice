"use client";

import { CharacterType } from "@/lib/types/CharacterType";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { getCharacters } from "@/lib/api/getCharacters";
export default function Page() {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const getFetchCharacters = async () => {
      const data = await getCharacters(currentPage,search)
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    };
    getFetchCharacters();
  }, [currentPage, search]);

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => {
            setCurrentPage(1);
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {characters.map((character) => (
          <div key={character.id} className="rounded overflow-hidden shadow-lg">
            <div className="relative">
              <a href="#">
                <img
                  className="w-full"
                  src={character.image}
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            </div>
            <div className="px-6 py-4">
              <a
                href=""
                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
              >
                {character.name}
              </a>
              <p className="text-gray-500 text-sm">
                {character.species} - {character.status}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() =>
                  currentPage > 1 && setCurrentPage(currentPage - 1)
                }
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={currentPage === 1}
                onClick={() => setCurrentPage(1)}
              >
                1
              </PaginationLink>
            </PaginationItem>
            {currentPage > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {currentPage !== 1 && currentPage !== totalPages && (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive
                  onClick={() => setCurrentPage(currentPage)}
                >
                  {currentPage}
                </PaginationLink>
              </PaginationItem>
            )}
            {currentPage < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {totalPages > 1 && (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive={currentPage === totalPages}
                  onClick={() => setCurrentPage(totalPages)}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  currentPage < totalPages && setCurrentPage(currentPage + 1)
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
