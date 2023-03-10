import { styled } from '..'

export const StepsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',
  padding: '1rem',
  width: '100%',

  '.hideForm': {
    display: 'none'
  },

  '.showForm': {
    display: 'block'
  },

  '.btnBack': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: '1px',
    padding: '0.25rem',

    '&:not(:disabled):hover': {
      filter: 'brightness(90%)',
    }
  }
})

export const StepNavigator = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',

})

export const FormWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1rem',

  form: {
    display: 'flex',
    flexDirection: 'column',

    button: {
      marginTop: '1rem',
    }
  },

})

export const CardBoxWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  marginTop: '1rem',
})


export const CompletedContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  marginTop: '1rem',
  padding: '2rem',
  textAlign: 'center',

  a: {
    marginTop: '1rem'
  },

  form: {
    display: 'flex',
    flexDirection: 'column',

    button: {
      marginTop: '1rem',
    }
  },
})