import React from "react"
import { Select } from "antd"
import { useDispatch } from "react-redux"
import { setSortOrder } from "./sortSlice"

const { Option } = Select

const SortSelect = () => {
  const dispatch = useDispatch()

  const handleSort = (value) => {
    dispatch(setSortOrder(value))
  }

  return (
    <Select defaultValue={"default"} onChange={handleSort} className="w-full">
      <Option value="default" disabled>
        Pilih Urutan
      </Option>
      <Option value="asc">Abjad (A-Z)</Option>
      <Option value="desc">Abjad (Z-A)</Option>
      <Option value="priceHigh">Harga Tertinggi</Option>
      <Option value="priceLow">Harga Terendah</Option>
    </Select>
  )
}

export default SortSelect
