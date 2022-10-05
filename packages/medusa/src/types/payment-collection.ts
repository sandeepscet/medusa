import { PaymentCollection, PaymentCollectionType } from "../models"

export type CreatePaymentCollectionInput = {
  region_id: string
  type: PaymentCollectionType
  currency_code: string
  amount: number
  metadata?: any
  description?: string
}

export const defaultPaymentCollectionRelations = [
  "region",
  "region.payment_providers",
  "payment_sessions",
]

export const defaultPaymentCollectionFields: (keyof PaymentCollection)[] = [
  "id",
  "type",
  "status",
  "description",
  "amount",
  "authorized_amount",
  "refunded_amount",
  "currency_code",
  "metadata",
  "region",
  "payment_sessions",
  "payments",
]

// eslint-disable-next-line max-len
export const storePaymentCollectionNotAllowedFieldsAndRelations = ["created_by"]

export const defaultStorePaymentCollectionRelations =
  defaultPaymentCollectionRelations.filter(
    (field) =>
      !storePaymentCollectionNotAllowedFieldsAndRelations.includes(field)
  )
export const defaultStorePaymentCollectionFields =
  defaultPaymentCollectionFields.filter(
    (field) =>
      !storePaymentCollectionNotAllowedFieldsAndRelations.includes(field)
  )
