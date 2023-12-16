import React, { useState } from "react"
import { Input } from "antd"
import { CiSearch } from "react-icons/ci"
import { setSearchTerm } from "./searchSlice"
import { useDispatch } from "react-redux"

const Search = () => {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
  }

  return (
    <form action="" className="flex relative w-[50%]" onSubmit={handleSearch}>
      <Input
        placeholder="Cari Barang ..."
        className="text-xl"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="absolute top-1 right-1">
        <CiSearch size={24} />
      </button>
    </form>
  )
}

export default Search
