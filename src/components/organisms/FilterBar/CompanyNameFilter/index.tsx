// External libs

// Assets

// Componentes

// Subcomponentes and style
import Button from '@/components/atoms/Button'
import Checkbox from '@/components/atoms/Checkbox'
import { setCompanyNameFilter } from '@/redux/slicers/jobs'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { useState } from 'react'
import * as Styled from './styles'

// Services

// Types

const CompanyNameFilter: React.FC = () => {
  const dispatch = useAppDispatch()
  const { jobs, filters } = useAppSelector(state => state.jobsData)
  const [show, setShow] = useState(false)

  const handleCheckboxClick = (companyName: string) => {
    dispatch(setCompanyNameFilter(companyName))
  }

  const handleButtonClick = () => {
    setShow(!show)
  }

  return (
    <Styled.Container>
      <Button color="primaryReverse" onClick={handleButtonClick}>
        Filter by Company
      </Button>
      <Styled.Content show={show}>
        {jobs.map(job => (
          <Checkbox
            key={`check-${job.jobId}`}
            label={job.companyName}
            active={filters.companyName.includes(job.companyName)}
            checked={filters.companyName.includes(job.companyName)}
            onClick={() => handleCheckboxClick(job.companyName)}
          />
        ))}
      </Styled.Content>
    </Styled.Container>
  )
}

export default CompanyNameFilter
