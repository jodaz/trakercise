import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount } from '../../services/Account/actions';
import { Button, Container, Row, Col } from 'reactstrap';

class Account extends Component {
  
  deleteHandler = () => {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;

    return (
      <Container>
        <Row>
          <Col md='12'>
            <p>{user.username}</p>
            <Button
              color='danger' 
              size='sm'
              onClick={this.deleteHandler}
            >
              Delete account
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

Account.propTypes = {
  auth: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteAccount })(Account);