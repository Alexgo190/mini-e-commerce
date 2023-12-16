import React from "react"
import { Select } from "antd"
import { useDispatch } from "react-redux"
import { setFilter } from "./categorySlice"

const { Option } = Select

const Category = () => {
  const dispatch = useDispatch()
  const handleCategory = (value) => {
    dispatch(setFilter(value))
    console.log(value)
  }
  return (
    <Select
      defaultValue={"default"}
      className="w-full"
      onChange={handleCategory}
    >
      <Option value="default" disabled>
        Pilih Kategori
      </Option>
      <Option value="All Categories">All Categories</Option>
      <Option value="electronics">Electronic</Option>
      <Option value="jewelery">Jewelery</Option>
      <Option value="clothing">Clothing</Option>
    </Select>
  )
}

export default Category
