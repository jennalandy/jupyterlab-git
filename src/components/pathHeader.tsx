import {
  gitRepoStyle,
  gitRepoIconStyle,
  gitRepoPathStyle,
  gitRepoRefreshStyle,
  arrowStyle,
  gitRepoPathContainerStyle,
  directoryStyle
} from '../components_style/PathHeaderStyle'

import * as React from 'react'

import '../../style/index.css'

export interface IPathHeaderState {
  topRepoPath: string
  refresh: any
}

export interface IPathHeaderProps {
  currentFileBrowserPath: string
  topRepoPath: string
  refresh: any
}

export class PathHeader extends React.Component<IPathHeaderProps, IPathHeaderState> {
  constructor(props: IPathHeaderProps) {
    super(props)
    this.state = {
      topRepoPath: props.topRepoPath, 
      refresh: props.refresh
    }
  }

  render() {
    let relativePath = []
    if (this.props.currentFileBrowserPath!=='') {
      relativePath = relativePath.concat(this.props.currentFileBrowserPath.split('/'))
    }

    return (
        <div>
          <li className={gitRepoStyle}>
            <span className={gitRepoIconStyle}/>
            <span className={gitRepoPathStyle}> 
              {relativePath.map(directory =>
                <div className={gitRepoPathContainerStyle} id={directory}>
                  <div className={arrowStyle}>⌃</div>
                  <div className={directoryStyle}>{directory}</div>
                </div>
              )}
              </span> 
            <button className={gitRepoRefreshStyle} onClick={()=>this.props.refresh()} />
          </li>
        </div>
    )
  }
}





