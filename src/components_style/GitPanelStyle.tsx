import { style } from 'typestyle';

export const panelContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  height: '100%'
});

export const panelPushedContentStyle = style({
  position: 'relative',
  left: '50px',
  width: 'calc(100% - 50px)'
});

export const panelContentStyle = style({
  '-webkit-transition': 'all 0.5s ease',
  '-moz-transition': 'all 0.5s ease',
  transition: 'all 0.5s ease'
});

export const panelWarningStyle = style({
  textAlign: 'center',
  marginTop: '9px'
});

export const findRepoButtonStyle = style({
  color: 'white',
  backgroundColor: 'var(--jp-brand-color1)',
  marginTop: '5px'
});
