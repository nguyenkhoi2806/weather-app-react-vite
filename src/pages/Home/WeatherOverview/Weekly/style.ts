import styled from '@emotion/styled';

const WeeklyItem = styled.div({
  background:
    'linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(171, 203, 222, 0.05) 100%) 0% 0%',
  boxShadow:
    'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  padding: '2px 0',
  borderRadius: '8px',
  display: 'fex',
  alignItems: 'center',
  marginBottom: '20px',
});

export const WeeklyDay = styled.div({
  width: ' 33.333%',
  textAlign: 'left',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
  padding: '10px 0',
  '&:first-of-type': {
    alignItems: 'start',
    marginLeft: '20px',
  },
  '.WeeklyDay__day': {
    color: 'white',
    fontWeight: '700',
    textAlign: 'start',
    fontSize: '12px',
    '@media (min-width: 600px)': {
      fontSize: '14px',
    },
  },
  '.WeeklyDay__type': {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    '@media (min-width: 600px)': {
      fontSize: '14px',
    },
    svg: {
      fontSize: '15px',
      marginRight: '.5rem',
      '@media (min-width: 600px)': {
        marginRight: '.6rem',
        fontSize: '20px',
      },
    },
  },
});

export { WeeklyItem };
