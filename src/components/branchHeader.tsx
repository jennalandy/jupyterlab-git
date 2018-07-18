import * as React from 'react'

import {
  Widget
} from '@phosphor/widgets'

import {
  Dialog, showDialog
} from '@jupyterlab/apputils'

import {
  Git
} from '../git'

import {
  classes
} from 'typestyle'

import {
  branchStyle,
  branchLabelStyle,
  switchBranchStyle,
  branchDropdownStyle,
  changeButtonStyle,
  changeButtonDisabledStyle,
  dropdownStyle
} from '../components_style/BranchHeaderStyle'

import '../../style/index.css'

export interface IBranchHeaderState {
  topRepoPath: string,
  currentBranch: string,
  data: any,
  refresh: any,
  disabled: boolean,
  showNotice: boolean,
  dropdownOpen: boolean
}

export interface IBranchHeaderProps {
  currentFileBrowserPath: string,
  topRepoPath: string,
  currentBranch: string,
  data: any,
  refresh: any,
  disabled: boolean
}

export class BranchHeader extends React.Component<IBranchHeaderProps, IBranchHeaderState>{
  interval: any
  constructor(props: IBranchHeaderProps) {
    super(props)
    this.state = {
      topRepoPath: props.topRepoPath, 
      currentBranch: props.currentBranch, 
      data: [], 
      refresh: props.refresh, 
      disabled: props.disabled, 
      showNotice: false,
      dropdownOpen: false,
    }
  }

  /** Switch current working branch */
  switchBranch(event, refresh) {
    let gitApi = new Git()
    if (event.target.value === '') {
      let input = new Widget({ node: document.createElement('input') })
      showDialog(
        {        
          title: 'Input a name to create a new branch and switch to it:',
          body: input,
          focusNodeSelector: 'input',
          buttons: [Dialog.cancelButton(), 
          Dialog.okButton({ label: 'Create'})]
        }
      ).then(result => {
        let targetBranch = (input.node as HTMLInputElement).value 
        if (result.button.accept && targetBranch) {
          gitApi.checkout(true, true, targetBranch, false, null, this.props.currentFileBrowserPath)
          .then(response => {
            refresh()
          })
        }
      })
    } else {
      gitApi.checkout(true, false, event.target.value, false, null, this.props.currentFileBrowserPath)
      .then(respones => {
        refresh()
      })
    }
  }

  /** Trigger notice that switching branches is currently disabled */
  switchBranchDisableNotice() {
    this.setState({showNotice: true})
    setTimeout(function() {
      this.setState({showNotice: false})
    }
    .bind(this), 3000)
  }

  toggleSelect() {
    this.props.refresh()
    console.log('toggle')
    console.log(this.state)
    if (!this.state.disabled) {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      })
    } else {
      this.switchBranchDisableNotice()
    }
  }

  render() {
    return (
      <div className={branchStyle}>
        <span className ={branchLabelStyle}>
          {this.state.showNotice ? 
            'Stage and commit changes before switching branches' 
            : this.props.currentBranch
          }
        </span>
        <a className={this.props.disabled ? 
          classes(changeButtonStyle, changeButtonDisabledStyle) 
          : changeButtonStyle} 
          onClick={() => this.toggleSelect()}
        >
          Change
        </a>
        {this.state.dropdownOpen &&
          <div
            className={dropdownStyle}
          >
            <select 
              ref="switch_branch_dropdown_button" 
              value={this.props.currentBranch} 
              disabled={this.props.disabled} 
              title={this.props.disabled ? 
                'Stage and commit changes before switching branches' 
                : 'select branches'
              } 
              className={branchDropdownStyle}
              onChange={event => this.switchBranch(event, this.props.refresh)} 
            >
              <option 
                className={switchBranchStyle}
                value=' '
                disabled
              >
                Change 
              </option>
              {this.props.data.map((dj, dj_index) => {
                  <option value ={dj.name} key={dj_index}>
                      {dj.name}
                  </option>
                })
              }
              <option className='jp-Git-create-branch-line' disabled />
              <option className='jp-Git-create-branch' value=''>
                Create New
              </option>
            </select>
          </div> 
        }
        </div>
    )
  }
}




