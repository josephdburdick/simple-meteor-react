C.Header.HeaderNavItem = React.createClass({
  isActive() {
    return FlowRouter.current().path === this.props.href;
  },

  render() {
    return (
      <li className={this.isActive() && 'active'}>
        <a href={this.props.href}>
          {this.props.name}</a>
      </li>
    );
  }
});