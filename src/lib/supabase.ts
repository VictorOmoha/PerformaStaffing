import { createClient } from '@supabase/supabase-js'

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || 'https://placeholder.supabase.co'
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type JobStatus = 'pending' | 'active' | 'closed'

export interface Employer {
  id: string
  user_id: string
  company_name: string
  industry: string | null
  phone: string | null
  website: string | null
  created_at: string
}

export interface Job {
  id: string
  employer_id: string
  title: string
  description: string
  requirements: string | null
  location: string
  salary_range: string | null
  contract_type: string
  deadline: string | null
  status: JobStatus
  created_at: string
  employers?: { company_name: string; industry: string | null }
}
