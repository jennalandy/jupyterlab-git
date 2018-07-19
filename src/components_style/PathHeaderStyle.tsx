import {
  style
  } from 'typestyle/lib'

export const gitRepoStyle = style (
  {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'var(--jp-layout-color2)',
    lineHeight: 'var(--jp-private-running-item-height)'
  }
)

export const gitRepoIconStyle = style (
  {
    padding: '0px 8px',
    marginLeft: '8px',
    marginBottom: '4px',
    backgroundSize: '15px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: 'var(--jp-icon-home)',
  }
)

export const gitRepoPathStyle = style (
  {
    fontSize: 'var(--jp-ui-font-size1)',
    marginRight: '4px',
    paddingLeft: '4px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%'
  }
)
  
export const gitRepoRefreshStyle = style (
  {
    width: 'var(--jp-private-running-button-width)',
    background: 'var(--jp-layout-color2)',
    border: 'none',
    backgroundImage: 'var(--jp-icon-refresh)',
    backgroundSize: '16px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    $nest: {
      '&:hover': {
        backgroundColor: 'lightgray',
      },
      '&:active': {
        backgroundColor: 'lightgray',
        boxShadow: '0 1px #666',
        transform: 'translateY(0.5px)'
      }
    }
  }
)

export const arrowStyle = style (
  {
    transform: 'rotate(90deg)',
    width: '12px'
  }
)

export const gitRepoPathContainerStyle = style (
  {
    display: 'inline-flex'
  }
)

export const directoryStyle = style (
  {
    paddingLeft: '5px' 
  }
)