// External libs
import JobsPage from '@/components/pages/Jobs'
import { setJobs, TJob } from '@/redux/slicers/jobs'
import { useAppDispatch } from '@/redux/store'
import axios from 'axios'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

// Assets

// Componentes

// Subcomponentes and style

// Services

// Types
interface IJobs {
  jobs: TJob[]
  remainingJobs: number
  totalJobs: number
}

interface IJobsProps {
  jobs: IJobs
  error: any
}

const jobs: NextPage<IJobsProps> = ({ jobs, error }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setJobs(jobs))
  }, [dispatch, jobs])

  useEffect(() => {
    toast.error(error, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
  }, [error])

  return <JobsPage />
}

export default jobs

export async function getServerSideProps() {
  try {
    const { data } = await axios.post('https://www.zippia.com/api/jobs/', {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: 'Business Analyst',
      locations: [],
      numJobs: 20,
      previousListingHashes: []
    })

    return {
      props: { jobs: data }
    }
  } catch (e) {
    return {
      props: { error: e }
    }
  }
}
