// External libs

// Assets

// Componentes
import PageWrapper from '@/components/templates/PageWrapper'

// Subcomponentes and style
import * as Styled from './styles'
import CompanyNameFilter from './CompanyNameFilter'

// Services

// Types

const FilterBar: React.FC = () => {
  return (
    <Styled.Container>
      <PageWrapper padding="1rem 1rem 0 1rem">
        <CompanyNameFilter />
      </PageWrapper>
    </Styled.Container>
  )
}

export default FilterBar
