import {
  style
} from 'typestyle/lib' 

export const branchStyle = style (
  {
    display: 'flex',
    flexDirection: 'row',
    zIndex: 1,
    boxShadow: 'var(--jp-toolbar-box-shadow)',
    height: '40px'
  }
)

export const branchLabelStyle = style (
  {
    fontSize: 'var(--jp-ui-font-size1)',
    paddingLeft: '80px',
    paddingRight: '4px',
    paddingTop: '10px',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: '15px'
  }
)

export const switchBranchStyle = style (
  {
    //display: 'none',
  }
)

export const branchDropdownStyle = style (
  {
    display: 'none',
    backgroundImage: 'var(--jp-icon-caretdown)',
    backgroundColor: 'transparent',
    flex: '0 0 auto',
    verticalAlign: 'middle',
    border: 'var(--md-grey-700)',
    borderRadius: '0',
    outline: 'none',
    width: '11px',
    height: '11px',
    marginTop: '8px',
    marginBottom: '2px',
    textIndent: '20px',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
  }
)

export const changeButtonStyle = style(
  {
    color: 'var(--jp-brand-color2)',
    paddingTop: '12px',
    fontSize: '10px',
    paddingRight: '50px'
  }
)

export const changeButtonDisabledStyle = style(
  {
    color: 'var(--jp-font-color2)'
  }
)

export const dropdownStyle = style (
  {

  }
)