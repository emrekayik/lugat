import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  margin-right: 8px;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:hover {
    border-color: #0070f3;
  }
`;

const Button = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0366d6;
  }
`;

const Ul = styled.ul`
  counter-reset: index;
  padding: 0;
  max-width: 300px;
`;

const Li = styled.li`
  counter-increment: index;
  display: flex;
  align-items: center;
  padding: 12px 0;
  box-sizing: border-box;

  &::before {
    content: counters(index, ".", decimal-leading-zero);
    font-size: 1.5rem;
    text-align: right;
    font-weight: bold;
    min-width: 50px;
    padding-right: 12px;
    font-variant-numeric: tabular-nums;
    align-self: flex-start;
    background-image: linear-gradient(to bottom, aquamarine, orangered);
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & + li {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export default function Sozluk() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(`/api/lugat?kelime=${searchTerm}`);
    const data = await res.json();
    setSearchResults(data);
    console.log(searchResults);
    console.log(data);
  };
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch}>Ara</Button>
      </div>
      <div>
        <Ul>
          {searchResults.map((item) => (
            <Li key={item.anlam_sira}>{item.anlam}</Li>
          ))}
        </Ul>
      </div>
    </Container>
  );
}
