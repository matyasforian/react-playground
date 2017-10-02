
class HomePage extends React.Component{
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

ReactDOM.render(
    <HomePage name="test" />,
    document.getElementById('root'));