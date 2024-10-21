export interface Trasanction{
  id?: number,
  title: string,
  transactionValue: number | string,
  transactionType: 'receita' | 'despesa',
  descricao: string,
  category: string,
  created_at?: string,
  updated_at?: string
}
