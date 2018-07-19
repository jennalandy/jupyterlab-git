import {
  style
} from 'typestyle/lib'

export const fileStyle = style (
  {
    display: 'flex',
    flexDirection: 'row',
    color: 'var(--jp-ui-font-color1)',
    height: 'var(--jp-private-running-item-height)',
    lineHeight: 'var(--jp-private-running-item-height)',
    margin: '0',
    padding: '0',
    listStyleType: 'none',

    $nest: {
      '&:hover': {
        backgroundColor: 'rgba(153,153,153,.1)'
      },
      '&:hover .jp-Git-button': {
        display: 'inline'
      }
    }
  }
)

export const fileGitButtonStyle = style (
  {
    display: 'none'
  }
)

export const fileLabelStyle = style (
  {
    fontSize: 'var(--jp-ui-font-size1)',
    flex: '1 1 auto',
    marginRight: '4px',
    paddingLeft: '4px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    borderRadius: '2px',
    transition: 'background-color 0.1s ease',

    $nest: {
      '&:focus': {
        backgroundColor: 'rgba(153,153,153,.2)'
      }
    }
  }
)

export const fileIconStyle = style (
  {
    flex: '0 0 auto',
    padding: '0px 8px',
    marginRight: '4px',
    marginLeft: '12px',
    verticalAlign: 'baseline',
    backgroundSize: '16px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }
)

export const textInputStyle = style (
  {
    outline: 'none'
  }
)

export const sectionFileContainerStyle = style (
  {
      flex: '1 1 auto',
      margin: '0',
      padding: '0',
      overflow: 'auto'
  }
)

export const stagedAreaStyle = style (
  {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'var(--jp-brand-color1)',
    flex: '0 0 auto',
    height: '30px',
    fontWeight: 400,
    letterSpacing: '1px',
    fontSize: '12px',
    paddingLeft: '12px'
  }
)

export const stagedCommitStyle = style (
  {
    resize: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: '8px'
  }
)

export const stagedCommitMessageStyle = style (
  {
    width: '75%',
    fontWeight: 300,
    height: '32px',
    overflowX: 'auto',
    border: 'var(--jp-border-width) solid var(--jp-border-color2)',
    flex: '20 1 auto',
    resize: 'none',
    padding: '4px 8px',

    $nest: {
      '&:focus': {
        outline: 'none'
      }
    }
  }
)

export const stagedCommitButtonStyle = style (
  {
    backgroundImage: 'var(--jp-icon-checkmark-white)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'var(--jp-brand-color1)',
    backgroundSize: '40px',
    color: 'white',
    height: '42px',
    width: '40px',
    border: '0',
    flex: '1 1 auto'
  }
)

export const stagedCommitButtonReadyStyle = style (
  {
    opacity: 1
  }
)

export const stagedCommitButtonDisabledStyle = style (
  {
    backgroundColor: 'lightgray'
  }
)

export const stagedHeaderLabelStyle = style (
  {
    fontSize: 'var(--jp-ui-font-size1)',
    flex: '1 1 auto',
    marginRight: '4px',
    paddingLeft: '4px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    borderRadius: '2px',
    transition: 'background-color 0.1s ease',

    $nest: {
      '&:focus': {
        backgroundColor: 'rgba(153,153,153,.2)'
      }
    }
  }
)

export const sectionAreaStyle = style (
  {
    flex: '0 0 auto',
    margin: '4px 0px',
    padding: '4px 1px 4px 13px',
    fontWeight: 600,
    borderBottom: 'var(--jp-border-width) solid var(--jp-border-color2)',
    letterSpacing: '1px',
    fontSize: '12px'
  }
)

export const sectionHeaderLabelStyle = style (
  {
    fontSize: 'var(--jp-ui-font-size)',
    flex: '1 1 auto',
    marginRight: '4px',
    paddingLeft: '4px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    borderRadius: '2px',
    transition: 'background-color 0.1s ease',

    $nest: {
      '&:hover': {
        backgroundColor: '0'
      },
      '&:focus': {
        backgroundColor: '0'
      }
    }
  }
)

export const changeStageButtonStyle = style (
  {
    margin: '0px 4px',
    fontWeight: 600,
    backgroundColor: 'transparent',
    lineHeight: 'var(--jp-private-running-shutdown-button-height)',
    transition: 'background-color 0.1s ease',
    borderRadius: '2px',
    height: '12px',
    width: '12px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    outline: 'none',

    $nest: {
      '&:hover': {
        backgroundColor: 'none',
        outline: 'none'
      },
      '&:focus':
      {
        border: 'none',
        boxShadow: 'none',
        backgroundColor: 'none'
      }
    }
  }
)

export const changeStageButtonRightStyle = style (
  {
    float: 'right'
  }
)

export const stageFileButtonStyle = style (
  {
    backgroundImage: 'var(--jp-Git-icon-add)'
  }
)

export const unstageFileButtonStyle = style (
  {
    backgroundImage: 'var(--jp-Git-button-reset)',
  }
)

export const unstageFileButtonWhiteStyle = style (
  {
    backgroundImage: 'var(--jp-Git-button-reset-white)'
  }
)

export const discardFileButtonStyle = style (
  {
    backgroundImage: 'var(--jp-Git-button-discard)'
  }
)

export const discardFileButtonWhiteStyle = style (
  {
    backgroundImage: 'var(--jp-Git-button-discard-white)'
  }
)

export const trackFileButtonStyle = style (
  {
    backgroundImage: 'var(--jp-Git-icon-track)',
    marginTop: '4px'
  }
)

export const caretdownImageStyle = style (
  {
    backgroundImage: 'var(--jp-image-caretdown)'
  }
)

export const caretdownImageWhiteStyle = style (
  {
    backgroundImage: 'var(--jp-image-caretdownwhite)'
  }
)

export const caretrightImageStyle = style (
  {
    backgroundImage: 'var(--jp-image-caretright)'
  }
)

export const fileButtonStyle = style (
  {
    paddingTop: '20px'
  }
)

export const notebookFileIconStyle = style (
  {
    backgroundImage: 'var(--jp-icon-book)'
  }
)

export const consoleFileIconStyle = style (
  {
    backgroundImage: 'var(--jp-icon-terminal)'
  }
)

export const terminalFileIconStyle = style (
  {
    backgroundImage: 'var(--jp-icon-terminal)'
  }
)

export const folderFileIconStyle = style (
  {
    backgroundImage: 'var(--jp-icon-directory)'
  }
)

export const genericFileIconStyle = style (
  {
    backgroundImage: 'var(--jp-icon-file)'
  }
)

export const yamlFileIconStyle = style (
  {
    backgroundImage: 'var(--jp-icon-yaml)'
  }
)

export const markdownFileIconStyle = style (
  {
    backgroundImage: 'var(--jp-icon-markdown)'
  }
)

export const imageFileIconStyle = style (
  {
    backgroundImage: 'var(--jp-icon-image)'
  }
)

export const spreadsheetFileIconStyle = style (
  {
    backgroundImage: 'var(--jp-icon-spreadsheet)'
  }
)

export const jsonFileIconStyle = style (
  {
    backgroundImage: 'var(--jp-icon-json)'
  }
)

export const pythonFileIconStyle = style (
  {
    backgroundImage: 'var(--jp-icon-python)'
  }
)

export const kernelFileIconStyle = style (
  {
    backgroundImage: 'var(--jp-icon-r)'
  }
)