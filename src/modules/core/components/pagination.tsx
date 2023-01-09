import Pagination from 'react-js-pagination'
import React from 'react'

type Props = {
  currentPage: number
  totalItems: number
  handlePage: (pageNum: number) => void
  perPage?: number
}

const Pages = ({ currentPage, handlePage, totalItems, perPage = 20 }:Props) => {
  return (
    <Pagination
      innerClass="flex justify-center"
      itemClass="px-3 border-transparent rounded-full py-1 font-semibold"
      itemClassFirst="dark:border-l-primary border-l-secondary border-l-2"
      itemClassLast="dark:border-r-primary border-r-secondary border-r-2"
      activeClass="dark:bg-primary bg-secondary text-white"
      activePage={currentPage}
      totalItemsCount={totalItems}
      onChange={handlePage}
      itemsCountPerPage={perPage}
    />
  )
}

export default Pages
