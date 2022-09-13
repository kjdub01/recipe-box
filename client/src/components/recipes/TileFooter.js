import React from 'react'

class TileFooter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            click: false,
        }
        this.toggleHover = this.toggleHover.bind(this)
        this.toggleClick = this.toggleClick.bind(this)
    }

    toggleHover() {
        this.setState({ hover: !this.state.hover })
    }

    toggleClick() {
        this.setState({ click: !this.state.click })
    }

    render() {
        let bookmarkStyle;
        if (this.state.hover | this.state.click) {
            bookmarkStyle = "zmdi zmdi-bookmark zmdi-hc-2x btn-bookmark"
        } else {
            bookmarkStyle = "zmdi zmdi-bookmark-outline zmdi-hc-2x btn-bookmark"
        }

        return (
            <footer className="tile_footer">
                <i className={bookmarkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.toggleClick} />
            </footer>
        );
    }
}

export default TileFooter        