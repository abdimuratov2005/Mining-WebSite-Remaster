import { defineStore } from "pinia";

interface Form {
  name: string | undefined
  tel: string | number | undefined
  checkbox: boolean | undefined
}

interface FormState {
  form: Form
}

export const useFormStore = defineStore('form', {
  state: (): FormState => ({
    form: {
      name: '',
      tel: '',
      checkbox: false
    }
  }),
  actions: {
    handleSubmit(){
      const json = JSON.stringify(this.form);
      alert(json)
    }
  }
})