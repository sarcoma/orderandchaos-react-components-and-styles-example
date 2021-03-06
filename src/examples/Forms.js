import React, { Component, Fragment } from 'react';
import {
    Column,
    Input,
    Row,
    Select,
    Slider,
    Switch,
    TextArea,
    Title,
} from '@orderandchaos/react-components';

export default class Forms extends Component {

    state = {
        slider: 10,
        switch: false,
    };

    handleSliderChange = (name, value) => {
        value = parseFloat(value);
        this.setState({[name]: value});
    };

    toggleSwitch = () => {
        this.setState(prevState => ({
            switch: !prevState.switch,
        }));
    };

    render() {
        return (<Fragment>
                <Title tag='h2' className='border--bottom'>Forms</Title>
                <Row>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <Input
                            type='text'
                            name='text'
                            label='Text Field'
                            placeholder='Enter text'
                        />
                    </Column>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <Input
                            type='email'
                            name='email'
                            label='Email Field'
                            placeholder='Enter email'
                        />
                    </Column>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <Input
                            type='url'
                            name='url'
                            label='URL Field'
                            placeholder='Enter url'
                        />
                    </Column>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <Input
                            type='tel'
                            name={'telephone'}
                            label='Telephone Field'
                            placeholder='Enter telephone'
                        />
                    </Column>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <Input
                            type='password'
                            name='password'
                            label='Password Field'
                            placeholder='Enter password'
                        />
                    </Column>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <Input
                            type='number'
                            name='number'
                            label='Number Field'
                            placeholder='Enter number'
                        />
                    </Column>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <Input
                            type='search'
                            name='search'
                            label='Search Field'
                            placeholder='Enter search'
                        />
                    </Column>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <Input
                            type='date'
                            name='date'
                            label='Date Field'
                            placeholder='Enter date'
                        />
                    </Column>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <Input
                            type='color'
                            name='colour'
                            label='Colour Field'
                            placeholder='Enter color'
                        />
                    </Column>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <Select
                            label='Select Field' name='select' options={[
                            {
                                name: 'Option one',
                                value: 1,
                            },
                            {
                                name: 'Option two',
                                value: 2,
                            },
                            {
                                name: 'Option three',
                                value: 3,
                            },
                        ]}
                        />
                    </Column>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <TextArea name='text-area' label='Text Area'/>
                    </Column>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <Slider
                            label='Slider'
                            name='slider'
                            value={this.state.slider}
                            error={false}
                            onBlur={() => true}
                            onChange={this.handleSliderChange}
                            min={0}
                            max={100}
                            step={0.5}
                        />
                    </Column>
                    <Column span={['4', 'xsml-12', 'sml-6']}>
                        <Switch
                            name='switch'
                            label='Switch'
                            value={this.state.switch}
                            error={false}
                            onBlur={() => console.log('Switch')}
                            onChange={this.toggleSwitch}
                        />
                    </Column>
                </Row>
            </Fragment>
        );
    }
}
