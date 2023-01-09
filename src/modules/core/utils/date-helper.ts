import { format } from 'date-fns'

export default {
  default: (value?: string) => format(new Date(value!), 'dd/MM/yyyy')
}
