import Spinner from '../components/Spinner';
import {Renderer, RendererProps} from '../factory';
import React from 'react';
import {SpinnerProps} from '../components/Spinner';

interface SpinnerRenderProps
  extends RendererProps,
    Omit<SpinnerProps, 'className'> {}

@Renderer({
  type: 'spinner'
})
export class SpinnerRenderer extends React.Component<SpinnerRenderProps> {
  render() {
    const {render, body, ...rest} = this.props;
    return <Spinner {...rest}>{body ? render('body', body) : null}</Spinner>;
  }
}
