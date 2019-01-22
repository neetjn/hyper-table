import TableConfig from '../flow-typed/config.def'

//@flow
DefaultConfig implements TableConfig = {
  showPagination: true,
  showPaginationTop: false,
  showPaginationBottom: true,
  showPageSizeOptions: true,
  defaultPageSize: 20,
  pageSize: 0,
  showPageJump: true,
}

export default DefaultConfig
