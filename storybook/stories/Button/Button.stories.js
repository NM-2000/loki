import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import createAsyncCallback from '@loki/create-async-callback';
import Button from '.';
import CenterView from '../CenterView';

const styles = StyleSheet.create({
  smile: {
    fontSize: 40
  },
  smart: {
    fontSize: 60
  },
  thumb: {
    fontSize: 80
  }
});

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Smile', () => (
    <Button onPress={action('clicked-smile')}>
      <Text style={styles.smile} >😀</Text>
    </Button>
  ))
  .add('Smart', () => (
    <Button onPress={action('clicked-smart')}>
      <Text style={styles.smart}>😎</Text>
    </Button>
  ), { loki: { skip: true } })
  .add('Thumb', () => (
    <Button onPress={action('clicked-thumb')}>
      <Text style={styles.thumb}>👍🏻</Text>
    </Button>
  ), { loki: { skip: true } });
