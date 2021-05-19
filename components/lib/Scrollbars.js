import React, {Component} from 'react'
import {Scrollbars} from 'react-custom-scrollbars'

const trackStyles = {
    position: 'absolute',
    width: '2px',
    right: '0px',
    bottom: '2px',
    top: '0px',
    height: '329px',
    visibility: 'visible',
    backgroundColor: '#E5E5E5',
    cursor: 'pointer'
}

const thumbStyles = {
    backgroundColor: 'rgb(47, 84, 235)',
    cursor: 'pointer'
}

export default class CustomScrollbars extends Component {
    render() {
        return (
            <Scrollbars
                onScroll={this.handleScroll}
                onScrollFrame={this.handleScrollFrame}
                onScrollStart={this.handleScrollStart}
                onScrollStop={this.handleScrollStop}
                onUpdate={this.handleUpdate}
                renderView={this.renderView}
                renderTrackHorizontal={this.renderTrackHorizontal}
                renderTrackVertical={props => <div {...props} style={trackStyles} className="track-vertical"/>}
                    renderThumbHorizontal={this.renderThumbHorizontal}
                    renderThumbVertical={props => <div {...props} style={thumbStyles} className="thumb-vertical"/>}
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    autoHeight
                    autoHeightMin={0}
                    autoHeightMax={200}
                    thumbMinSize={30}
                    universal={true}
                    hideTracksWhenNotNeeded
                    {...this.props}/>
                    )
                    }
                    }
                    /*position: absolute;
                        width: 2px;
                        right: -2px;
                        bottom: 2px;
                        top: -44px;
                        height: 329px;
                        visibility: visible;
                        background-color: #E5E5E5;*/

                    /*
                    * background-color: rgb(47, 84, 235);*/
