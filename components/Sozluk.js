import React, { useState } from 'react'

export default function Sozluk({ kelime }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async () => {
    const res = await fetch(`/api/lugat?kelime=${searchTerm}`)
    const data = await res.json()
    if (data['error'] == 'Sonuç bulunamadı') {
      setSearchResults([])
      return
    }
    setSearchResults(data[0].anlamlarListe)
    console.log(data)
  }

  return (
    <div className="flex flex-col mt-20 mb-16">
      <div className="join w-96">
        <input
          type="text"
          placeholder="Aradığınız kelimeyi giriniz."
          className="w-full max-w-xs input input-bordered input-primary text-primary join-item"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
        <button
          className="rounded-r-full btn btn-primary text-secondary join-item"
          onClick={handleSearch}
        >
          Ara
        </button>
      </div>
      <div>
        <div className="divider text-primary">{searchTerm}</div>
        <ul className="max-h-screen mt-2 space-y-4">
          {searchResults.map((result) => (
            <li key={result.anlam_sira}>
              <div className="shadow-xl card w-96 bg-base-100">
                <div className="card-body">
                  <h2 className="card-title">{result.anlam_sira}</h2>
                  <p>{result.anlam}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
