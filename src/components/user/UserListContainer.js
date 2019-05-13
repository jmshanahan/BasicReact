import React, { Component } from 'react';
import styled from 'styled-components';
import { fromJS } from 'immutable';

import { users } from './api';
import UserList from './UserList';

// const Container = styled`

// `;

export default class UserListContainer extends Component {
  state = {
    data: fromJS({
      error: null,
      loading: 'waiting while loading data...',
      users: []
    })
  };
  get data() {
    return this.state.data;
  }
  set data(data) {
    this.setState({ data });
  }
  componentDidMount() {
    users().then(
      result => {
        this.data = this.data
          .set('loading', null)
          .set('error', null)
          .set('users', fromJS(result.users));
      },
      error => {
        this.data = this.data.set('loading', null).set('error', error);
      }
    );
  }
  render() {
    return <UserList {...this.data.toJS()} />;
  }
}
