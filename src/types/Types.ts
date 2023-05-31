import { CATEGORIES, MILEAGE } from "../enums/Enums"

export type OrderDto = {
  from: {
    name: string,
    lat: number,
    long: number
  },
  to: {
    name: string,
    lat: number,
    long: number
  },
  duration: number,
  message: string,
  order_type: MILEAGE
}

export type UserRegDto = {
  created_at: string,
  email: string,
  id: number,
  name: string,
  phone_number: string,
  avg_rate: number,
  status: string,
  category: CATEGORIES,
  updated_at: string
}

export type UserAuthDto = {
  phoneNumber: string,
  password: string
}
