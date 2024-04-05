/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {DefaultContainer} from '@/components';
import {Avatar, Card, IconButton} from 'react-native-paper';
import {MainTabScreenProps} from '@/types/screenTypes';

const Profile = ({navigation}: MainTabScreenProps<'Profile'>) => {
  return (
    <DefaultContainer>
      <Card style={{marginBottom: 16}}>
        <Card.Title title="Andi Rayka" subtitle="Personal" />
      </Card>

      <Card>
        <Card.Title
          title="Account"
          left={props => <Avatar.Icon {...props} size={32} icon="account" />}
          right={props => (
            <IconButton {...props} icon="chevron-right" onPress={() => {}} />
          )}
        />
      </Card>
      <Card>
        <Card.Title
          title="Invoice"
          left={props => <Avatar.Icon {...props} size={32} icon="note-text" />}
          right={props => (
            <IconButton {...props} icon="chevron-right" onPress={() => {}} />
          )}
        />
      </Card>
      <Card>
        <Card.Title
          title="Contact Us"
          left={props => <Avatar.Icon {...props} size={32} icon="phone" />}
          right={props => (
            <IconButton {...props} icon="chevron-right" onPress={() => {}} />
          )}
        />
      </Card>
      <Card>
        <Card.Title
          title="Terms of Service"
          left={props => (
            <Avatar.Icon {...props} size={32} icon="information" />
          )}
          right={props => (
            <IconButton {...props} icon="chevron-right" onPress={() => {}} />
          )}
        />
      </Card>
      <Card>
        <Card.Title
          title="Logout"
          left={props => <Avatar.Icon {...props} size={32} icon="logout" />}
          right={props => (
            <IconButton {...props} icon="chevron-right" onPress={() => {}} />
          )}
        />
      </Card>
    </DefaultContainer>
  );
};

export default Profile;
