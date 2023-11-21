
import SubmitButton from "../../components/common/submitButton";
import Card from "../../components/common/card";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function Dashboard(props) {
  const user = props.user;
  return (
    <Container>
      <Card title="Welcome!">
        <p>Hello, {user.username}.</p>

        {
          user &&
          <div className="mt-5">
            <SubmitButton onClick={() => { props.onLogout() }}>
              Logout
            </SubmitButton>
          </div>
        }
        {
          user &&
          <div className="mt-5">
            <Link to={'/product/add'} >Add product</Link>
          </div>
        }
      </Card>
    </Container>
  )
}

export default Dashboard