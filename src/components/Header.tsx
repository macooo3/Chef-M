import chefLogo from '../images/chef-claude-icon.png';

export default function Header() {
  return (
    <header>
      <img src={chefLogo} alt="chef-logo" />
      <div>Chef Mario</div>
    </header>
  );
}
