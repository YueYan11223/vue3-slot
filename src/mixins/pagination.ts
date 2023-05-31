interface IPagination {
  currentPage: number
  pageSize: number
  total: number
}

export default function usePagination() {
  const pagination = ref<IPagination>({
    currentPage: 1,
    pageSize: 10,
    total: 0
  })
  return {
    pagination
  }
}