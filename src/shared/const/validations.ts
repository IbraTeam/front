type InputValidations = Record<string, Validation>

interface Validation {
  required: { value: boolean; message: string }
  maxLength?: { value: number; message: string }
  minLength?: { value: number; message: string }
  pattern?: { value: RegExp; message: string }
}

export const validations: InputValidations = {
  keyId: { required: { value: true, message: 'Заполните поле' } },
  teacherId: { required: { value: true, message: 'Заполните поле' } },
  pairName: {
    required: { value: true, message: 'Заполните поле' }
  },
  repeatCount: {
    required: { value: true, message: 'Заполните поле' },
    pattern: { value: /\d*/, message: 'Номер должен быть положительным' }
  },
  room: {
    required: { value: true, message: 'Заполните поле' }
  },
  name: {
    required: { value: true, message: 'Заполните поле' },
    maxLength: { value: 30, message: 'Длина от 2 до 30' },
    minLength: { value: 2, message: 'Длина от 2 до 30' },
    pattern: {
      value: /^[А-Яа-яA-Za-z]+\s*[А-Яа-яA-Za-z]*\s*[А-Яа-яA-Za-z]*$/,
      message: 'Некорректное имя'
    }
  },
  phone: {
    required: { value: true, message: 'Заполните поле' },
    maxLength: { value: 18, message: 'Длина 11' },
    pattern: { value: /^(\+7) \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/, message: 'Некорректный телефон' }
  },
  email: {
    required: { value: true, message: 'Заполните поле' },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Некорректный email'
    }
  },
  birthDate: {
    required: { value: true, message: 'Заполните поле' }
  },
  deliveryTime: {
    required: { value: true, message: 'Заполните поле' }
  },
  password: {
    required: { value: true, message: 'Заполните поле' },
    minLength: { value: 6, message: 'Минимальная длина 6 символов' }
  }
}
