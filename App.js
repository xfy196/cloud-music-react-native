import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry, Button, Icon } from '@ui-kitten/components';
import {EvaIconsPack} from "@ui-kitten/eva-icons"

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
    <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
  </Layout>
);
const FacebookIcon = (props) => (
  <Icon name='facebook' {...props} />
);

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}></IconRegistry>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <HomeScreen />
    </ApplicationProvider>
  </>
);