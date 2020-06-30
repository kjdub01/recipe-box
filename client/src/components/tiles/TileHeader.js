class TileHeader extends React.Component {
    render() {
        return (
            <header
                className="tile_header"
            >
                {this.props.recipeName}
            </header>
        );
    }
}

export default TileHeader;