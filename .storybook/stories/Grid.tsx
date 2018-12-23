// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Grid, Column } from '../../src/components/Core/Grid';

const Cell = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.25rem;
  text-align: center;
`;

const stories = storiesOf('Grid', module);

stories
  .add('12x1 small', () => (
    <Grid>
      <Column small={1}>
        <Cell>1</Cell>
      </Column>
      <Column small={1}>
        <Cell>2</Cell>
      </Column>
      <Column small={1}>
        <Cell>3</Cell>
      </Column>
      <Column small={1}>
        <Cell>4</Cell>
      </Column>
      <Column small={1}>
        <Cell>5</Cell>
      </Column>
      <Column small={1}>
        <Cell>6</Cell>
      </Column>
      <Column small={1}>
        <Cell>7</Cell>
      </Column>
      <Column small={1}>
        <Cell>8</Cell>
      </Column>
      <Column small={1}>
        <Cell>9</Cell>
      </Column>
      <Column small={1}>
        <Cell>10</Cell>
      </Column>
      <Column small={1}>
        <Cell>11</Cell>
      </Column>
      <Column small={1}>
        <Cell>12</Cell>
      </Column>
    </Grid>
  ))
  .add('2x6 small', () => (
    <Grid>
      <Column small={6}>
        <Cell>1</Cell>
      </Column>
      <Column small={6}>
        <Cell>2</Cell>
      </Column>
    </Grid>
  ))
  .add('3x4 medium', () => (
    <Grid>
      <Column medium={4}>
        <Cell>1</Cell>
      </Column>
      <Column medium={4}>
        <Cell>2</Cell>
      </Column>
      <Column medium={4}>
        <Cell>2</Cell>
      </Column>
    </Grid>
  ))
  .add('1x8 medium, 1x4 medium', () => (
    <Grid>
      <Column medium={8}>
        <Cell>1</Cell>
      </Column>
      <Column medium={4}>
        <Cell>2</Cell>
      </Column>
    </Grid>
  ));
