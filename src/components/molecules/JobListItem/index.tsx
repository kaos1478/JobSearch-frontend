// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import { setSelected, TJob } from '@/redux/slicers/jobs'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { useMemo } from 'react'
import * as Styled from './styles'

// Services

// Types
interface IJobsListItem {
  job: TJob
}

const JobListItem: React.FC<IJobsListItem> = ({ job }) => {
  const dispatch = useAppDispatch()
  const { selected } = useAppSelector(state => state.jobsData)

  const handleClick = () => {
    dispatch(setSelected(job))
  }

  const active = useMemo(() => {
    return selected?.jobId === job.jobId
  }, [selected, job.jobId])

  return (
    <Styled.Container onClick={handleClick} active={active}>
      <Typography as="heading1" marginBottom=".5rem">
        {job?.jobTitle}
      </Typography>
      <Typography as="heading2" marginBottom=".5rem">
        {job?.companyName}
      </Typography>
      <Styled.Description
        dangerouslySetInnerHTML={{ __html: job?.jobDescription }}
      />
    </Styled.Container>
  )
}

export default JobListItem
