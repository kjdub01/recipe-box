class TileHeader extends React.Component {
    render() {
        return (
            <header
                className="tile_header"
            >
                {this.props.title}
            </header>
        );
    }
}

export default TileHeader;