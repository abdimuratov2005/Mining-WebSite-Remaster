import { defineStore } from "pinia"

export interface ContactProps {
  mailto: string | undefined
  phone: string | undefined
}
export const useContactData = defineStore('contact', {
  state: (): ContactProps => ({
    mailto: 'mein@miner.com',
    phone: '79999999999',
  })
})